# Conservative autosync script
# - Runs in workspace root
# - Skips when on 'main' branch to avoid accidental pushes to main
# - Only commits and pushes if there are changes

# Move to repository root (workspaceFolder is current working directory when run by Run on Save)
Set-Location -Path "${PWD}"

# Ensure we are in a git repo
try {
  git rev-parse --is-inside-work-tree > $null 2>&1
} catch {
  Write-Output "Not a git repository. Exiting."
  exit 0
}

# Get current branch
$branch = git rev-parse --abbrev-ref HEAD
if ($branch -eq 'main') {
  Write-Output "On 'main' branch. Auto-sync is disabled for main. Exiting."
  exit 0
}

# Check if there are any changes
$porcelain = git status --porcelain
if ([string]::IsNullOrWhiteSpace($porcelain)) {
  Write-Output "No changes detected."
  exit 0
}

# Optional: short-circuit if only .vscode files changed (to avoid committing settings)
$onlyVscode = $true
$porcelain -split "`n" | ForEach-Object {
  if (-not ([string]::IsNullOrWhiteSpace($_))) {
    $line = $_.Trim()
    # status + path
    $parts = $line -split '\s+', 2
    if ($parts.Length -ge 2) {
      $path = $parts[1]
      if (-not ($path -like '.vscode/*')) {
        $onlyVscode = $false
      }
    } else {
      $onlyVscode = $false
    }
  }
}
if ($onlyVscode) {
  Write-Output "Only .vscode changes detected. Skipping auto commit."
  exit 0
}

# Stage, commit, and push
git add -A
$msg = "autosave: $(Get-Date -Format 'yyyy-MM-ddTHH:mm:ss')"
# Use --no-verify to skip hooks if you want to avoid blocking, remove if undesired
git commit -m $msg --no-verify
if ($LASTEXITCODE -ne 0) {
  Write-Output "Commit failed or nothing to commit. Exit code: $LASTEXITCODE"
  exit 0
}

git push
if ($LASTEXITCODE -ne 0) {
  Write-Output "Push failed. Exit code: $LASTEXITCODE"
  exit 1
}

Write-Output "Auto-sync completed: $msg"
