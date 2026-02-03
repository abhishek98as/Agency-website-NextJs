# Quick Deployment Script for Windows
# Usage: .\deploy.ps1 "Your commit message"

param(
    [string]$message = "Update: $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
)

Write-Host "🚀 Starting deployment..." -ForegroundColor Cyan
Write-Host ""

# Stage all changes
Write-Host "📦 Staging changes..." -ForegroundColor Yellow
git add -A

# Show status
Write-Host ""
Write-Host "📋 Changed files:" -ForegroundColor Yellow
git status --short

# Commit
Write-Host ""
Write-Host "💾 Committing with message: $message" -ForegroundColor Yellow
git commit -m $message

# Push to GitHub
Write-Host ""
Write-Host "☁️  Pushing to GitHub..." -ForegroundColor Yellow
git push origin main

Write-Host ""
Write-Host "✅ Deployment complete!" -ForegroundColor Green
Write-Host "   - Code pushed to GitHub" -ForegroundColor Green
Write-Host "   - Vercel will auto-deploy in ~2 minutes" -ForegroundColor Green
Write-Host ""
Write-Host "🔗 Check deployment status at: https://vercel.com/dashboard" -ForegroundColor Cyan
