git入门手册（资料来源：www.liaoxuefeng.com）
1.安装git
	本人使用windows环境，所以只要下载，然后傻瓜式安装就行。下载地址：https://git-for-windows.github.io
	配置全局环境变量
		$ git config --global user.name 'your name'
		$ git config --global user.email 'email@example.com'
2.git常用命令
	首先要创建版本库（也叫本地仓库），仓库就是普通文件夹，可以右键创建文件夹，也可以使用命令mkdir创建。
	路径切换到仓库下：
	$ git init
		通过这个命令把当前文件夹作用于git管理的仓库
	$ ls -ah
		查看当前路径下的所有文件，包括隐藏文件
	$ git add <file>
		把文件添加到仓库
	$ git commit -m 'xxx'
		把文件提交到仓库。 -m 是添加备注信息
	$ git status
		查看文件状态
	$ git diff <file>
		比对文件前后修改的信息
	$ git diff HEAD -- <file>
		查看工作区和版本库里面最新版本的区别
	$ git log / git log --pretty=oneline
		查看提交的日志
	$ git reset --hard HEAD^ / git reset --hard id
		回退到上一个版本 / 回退到日志为id的版本
	$ git reflog
		查看提交的日志，可以知道id是多少
	$ git checkout -- <file>
		文件还原，从仓库还原到本地工作区
	$ git rm <file>
		删除仓库文件，需结合git commit命令使用
3.远程仓库
	$ ssh-keygen -t rsa -C "youremail@example.com"
		创建ssh key
	$ git remote add origin git@github.com:linwuzheng/learngit.git
		关联远程仓库
	$ git push -u origin master
		上传到远程仓库