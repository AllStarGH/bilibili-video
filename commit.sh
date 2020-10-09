#git init

#git config user.email "duernna@163.com"
#git config user.name  "AllStarGH"

#origin:远端仓库的名字
#git remote add origin https://github.com/AllStarGH/bilibili_video.git

git status

git add .  

git commit -m "The Last Submission"

#master:当前分支名
git pull origin master

#报错:fatal: 无法找到远程引用 master
#首次提交,可忽略不计

git push origin master  
