#git config user.email "duernna@163.com"
#git config user.name  "AllStarGH"

#master:当前分支名

#origin:远端仓库的名字
#git remote add origin https://github.com/AllStarGH/bilibili-video-front.git

git status

git add .  

git commit -m "完善了README的简介"

#报错:"提示：更新被拒绝，因为您当前分支的最新提交落后于其对应的远程分支。"使用下面这句
#git pull origin master --allow-unrelated-histories

git pull origin master
#报错:fatal: 无法找到远程引用 master
#首次提交,可忽略不计

git push origin master  
