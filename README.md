## Push an existing folder
```bash
cd existing_folder
git init
git remote add origin https://gitlab.com/lostWinter64/sft-webpage.git
git add .
git commit -m "Initial commit"
git push -u origin master
```
## Push an existing Git repository
```bash
cd existing_repo
git remote rename origin old-origin
git remote add origin https://gitlab.com/lostWinter64/sft-webpage.git
git push -u origin --all
git push -u origin --tags
```
