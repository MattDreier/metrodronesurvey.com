#!/bin/bash

# MetroDroneSurvey.com - GitHub Pages Deployment Script
# Run this script to deploy your website to GitHub Pages

set -e  # Exit on error

echo "========================================="
echo "MetroDroneSurvey.com Deployment Script"
echo "========================================="
echo ""

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if git is initialized
if [ ! -d .git ]; then
    echo -e "${YELLOW}Git repository not initialized. Initializing...${NC}"
    git init
    git add .
    git commit -m "Complete MetroDroneSurvey website adaptation from Sanchez template"
    git branch -M main
    echo -e "${GREEN}Git repository initialized!${NC}"
else
    echo -e "${GREEN}Git repository already initialized.${NC}"
fi

# Check if remote exists
if git remote | grep -q origin; then
    echo -e "${GREEN}Git remote 'origin' already configured.${NC}"
    REMOTE_URL=$(git remote get-url origin)
    echo "Remote URL: $REMOTE_URL"
else
    echo ""
    echo -e "${YELLOW}No remote repository configured.${NC}"
    echo ""
    echo "Choose deployment method:"
    echo "1) Use GitHub CLI (gh) - Recommended"
    echo "2) Manual setup - I'll create the repo myself"
    read -p "Enter choice [1-2]: " choice

    case $choice in
        1)
            # Check if gh CLI is installed
            if command -v gh &> /dev/null; then
                echo -e "${GREEN}Creating GitHub repository...${NC}"
                gh repo create metrodronesurvey.com --public --source=. --remote=origin
                echo -e "${GREEN}Repository created!${NC}"
            else
                echo -e "${RED}GitHub CLI (gh) not found.${NC}"
                echo "Install it from: https://cli.github.com/"
                echo "Or choose option 2 for manual setup."
                exit 1
            fi
            ;;
        2)
            echo ""
            echo -e "${YELLOW}Manual Setup Instructions:${NC}"
            echo "1. Go to: https://github.com/new"
            echo "2. Repository name: metrodronesurvey.com"
            echo "3. Set to Public"
            echo "4. Do NOT initialize with README"
            echo "5. Create repository"
            echo ""
            read -p "Enter your GitHub username: " username
            echo ""
            echo "Run this command to add the remote:"
            echo -e "${GREEN}git remote add origin https://github.com/$username/metrodronesurvey.com.git${NC}"
            echo ""
            read -p "Press Enter after you've created the repo and added the remote..."
            ;;
        *)
            echo -e "${RED}Invalid choice. Exiting.${NC}"
            exit 1
            ;;
    esac
fi

# Verify everything is committed
if [[ -n $(git status -s) ]]; then
    echo ""
    echo -e "${YELLOW}Uncommitted changes detected.${NC}"
    git status -s
    echo ""
    read -p "Commit these changes? [y/N]: " commit_changes
    if [[ $commit_changes =~ ^[Yy]$ ]]; then
        git add .
        read -p "Commit message: " commit_msg
        git commit -m "$commit_msg"
        echo -e "${GREEN}Changes committed!${NC}"
    else
        echo -e "${YELLOW}Skipping commit. Only committed changes will be deployed.${NC}"
    fi
fi

# Push to GitHub
echo ""
echo -e "${GREEN}Pushing to GitHub...${NC}"
if git push -u origin main; then
    echo -e "${GREEN}Successfully pushed to GitHub!${NC}"
else
    echo -e "${YELLOW}Push failed. If the branch already exists, try:${NC}"
    echo "git push origin main"
    exit 1
fi

echo ""
echo "========================================="
echo -e "${GREEN}Deployment Initiated!${NC}"
echo "========================================="
echo ""
echo "Next steps:"
echo ""
echo "1. GitHub Actions is now building your site"
echo "   Check progress: https://github.com/YOUR_USERNAME/metrodronesurvey.com/actions"
echo ""
echo "2. Configure GitHub Pages:"
echo "   - Go to: Settings → Pages"
echo "   - Source: GitHub Actions"
echo "   - Custom domain: metrodronesurvey.com"
echo "   - Enable: Enforce HTTPS"
echo ""
echo "3. Configure DNS (see DEPLOYMENT.md for details):"
echo "   A records (@ → GitHub IPs)"
echo "   CNAME (www → YOUR_USERNAME.github.io)"
echo ""
echo "4. Wait for DNS propagation (1-48 hours)"
echo ""
echo "Full instructions: /opt/Projects/metrodronesurvey.com/DEPLOYMENT.md"
echo ""
echo "========================================="
