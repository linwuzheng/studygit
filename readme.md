# git入门手册（资料来源：[liaoxuefeng](http://www.liaoxuefeng.com))

## 1.安装git

 1.1 本人使用windows环境，所以只要下载，然后傻瓜式安装就行。下载地址：[git-for-windows](https://git-for-windows.github.io)，安装成功后，右键会有git的一些选项。
 
	配置全局环境变量
	$ git config --global user.name 'your name'
	$ git config --global user.email 'email@example.com'
	
 1.2 linux下安装git
 
	首先检测是否安装过git
	$ git
	The program 'git' is currently not installed. You can install it by typing:sudo apt-get install git
	
	有如上提示，说明未安装git，输入`sudo apt-get install git`命令进行安装，如此简单。都不用下载链接，linux自动帮你完成。
    
## 2.git常用命令

	首先要创建版本库（也叫本地仓库），仓库就是普通文件夹，可以右键创建文件夹，也可以使用命令mkdir创建。
	路径切换到仓库下：
	$ git init
		通过这个命令把当前文件夹作用于git管理的仓库
	$ ls -ah
		查看当前路径下的所有文件，包括隐藏文件
	$ git add <file>
		把文件添加到仓库
	$ git add --all
		把所有文件添加到仓库
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
		
## 3.远程仓库

	$ ssh-keygen -t rsa -C "youremail@example.com"
		创建ssh key，根据提示进行操作，可一直按ENTER键，输出的内容会有密钥生成的路径，将公钥copy到git上		
	$ git remote add origin git@github.com:msforest/learngit.git
		关联远程仓库
	$ ssh -T git@github.com
		验证是否远程链接成功
	$ git push -u origin master
		上传到远程仓库
	$ git clone git@github.com:msforest/gitskills.git
		从远处仓库下载到本地工作区
	$ git clone git@github.com:msforest/gitskills.git gitskills
		从远处仓库下载到本地指定目录下
		
PS:如果在github上修改，本地没有同步的话，本地仓库就无法提交到github上。所以，提交之前需要先将本地和远程数据同步，然后进行提交

## 4.同步与合并
	
	$ git remote -v
		查看远程仓库
	$ git fetch origin master:temp
		在本地新建一个temp分支，并将远程origin仓库的master分支代码下载到本地temp分支
	$ git diff temp
		比较本地仓库与下载的temp分支
	$ git merge temp
		合并temp分支到本地的master分支
	$ git branch -d temp 
		删除temp分支


[github版本下载](https://desktop.github.com)

> 工欲善其事，必先利其器。 ​ 出自：《论语·卫灵公》

