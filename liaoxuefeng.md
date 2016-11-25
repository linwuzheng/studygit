什么是版本库呢？版本库又名仓库，英文名repository，你可以简单理解成一个目录，这个目录里面的所有文件都可以被Git管理起来，每个文件的修改、删除，Git都能跟踪，以便任何时刻都可以追踪历史，或者在将来某个时刻可以“还原”。

所以，创建一个版本库非常简单，首先，选择一个合适的地方，创建一个空目录：

$ mkdir learngit
$ cd learngit
$ pwd
/Users/michael/learngit

通过git init命令把这个目录变成Git可以管理的仓库

第一步，用命令git add告诉Git，把文件添加到仓库：

$ git add readme.txt

执行上面的命令，没有任何显示，这就对了，Unix的哲学是“没有消息就是好消息”，说明添加成功。

第二步，用命令git commit告诉Git，把文件提交到仓库：

$ git commit -m "wrote a readme file"
 
为什么Git添加文件需要add，commit一共两步呢？因为commit可以一次提交很多文件，所以你可以多次add不同的文件，比如：

$ git add file1.txt
$ git add file2.txt file3.txt
$ git commit -m "add 3 files."

运行git status命令看看结果，git status命令可以让我们时刻掌握仓库当前的状态

$ git diff readme.txt 

git log命令显示从最近到最远的提交日志
如果嫌输出信息太多，看得眼花缭乱的，可以试试加上--pretty=oneline参数：