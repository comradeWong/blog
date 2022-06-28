## 关于kkFileView

**kkFileView为文件文档在线预览解决方案，该项目使用流行的spring boot搭建，易上手和部署，基本支持主流办公文档的在线预览，如doc,docx,xls,xlsx,ppt,pptx,pdf,txt,zip,rar,图片,视频,音频等等**

实际应用上来说，这个是为了实现电脑端小程序预览且不能下载文件的解决方案。

官网：<https://kkfileview.keking.cn/zh-cn/index.html>

文档：<https://kkfileview.keking.cn/zh-cn/docs/home.html>

## docker环境下安装

我只用了这一种方式安装，可以跟着[安装文档](https://kkfileview.keking.cn/zh-cn/docs/production.html)去安装，还是蛮简单的。

主要指令：

```bash
docker pull keking/kkfileview
docker run -d -it -p 8012:8012 keking/kkfileview

```

## 配置

这是最让我头痛的一步，官网上配置中是可以禁止pdf下载的，但是官网这么说。

> 打开conf目录，下面有一个application.properties配置文件，有部分配置是可以在程序运行中变更的，其他的变更需要重新启动程序。

我：？？？conf目录在哪儿？application.properties又在哪儿？

不慌，我们先看一下docker的运行情况

```bash
docker ps -a

```

然后就能看到下图

![Untitled](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F43908611-e0a6-4394-a0b7-e7aa2c7f3abc%2FUntitled.png?table=block\&id=fd52f81c-d888-41ab-ad0b-b464e6440136\&spaceId=66b5b247-bd3d-48d4-8f8f-3ae30f2572a1\&width=2000\&userId=b6990ffd-1e89-4271-9726-eca31d6485f4\&cache=v2 "Untitled")

这个就是我们的服务，然后前边的编号就是我们需要取到的值。

接着，我们执行

```
docker exec -it 3200a9321915 /bin/bash

```

此时就进入了容器中，然后我们执行

```bash
find / -name application.properties

```

顾名思义，找到所有的名叫application.properties的文件

![Untitled](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fff24d7c2-4e27-498a-9b1a-a7e94770c214%2FUntitled.png?table=block\&id=810a888a-9b26-4cc9-95b1-34d610380b2d\&spaceId=66b5b247-bd3d-48d4-8f8f-3ae30f2572a1\&width=1300\&userId=b6990ffd-1e89-4271-9726-eca31d6485f4\&cache=v2 "Untitled")

ok 我们已经找到这个文件了，接下来就是修改。

我的操作是

首先将docker镜像中的这个文件拷贝出来，修改之后，再拷贝回去替换即可。

拷贝出来到home/ubuntu

```bash
sudo docker cp 3200a9321915:/opt/kkFileView-4.1.0-SNAPSHOT/config/application.properties /home/ubuntu

```

拷贝回去（当前文件目录在home/ubuntu）

```bash
sudo docker cp ./application.properties 3200a9321915:/opt/kkFileView-4.1.0-SNAPSHOT/config/application.properties

```

这样就可以完成更新配置啦！
