# 一. 设计目标：
增强现实内容：利用tracking.JS实现对面部位置的捕捉，并且由此改变在天空盒场景中的视角，可以环顾场景。
建模内容：1. 天空盒的实现2. 空间中具有镜面反射的小球的随机生成

# 二. 相关知识和平台：
* 增强现实(Augmented Reality)技术是一种将虚拟信息与真实世界巧妙融合的技术，广泛运用了多媒体、三维建模、实时跟踪及注册、智能交互、传感等多种技术手段，将计算机生成的文字、图像、三维模型、音乐、视频等虚拟信息模拟仿真后，应用到真实世界中，两种信息互为补充，从而实现对真实世界的“增强”。 
* 使用了tracking.js,通过对用户面部的识别和追踪，来改变在建模空间中的视角。
* 分析总结特征：利用天空盒，构建了一个美丽的场景，同时在场景中增设了一些具有镜像材质的“镜面”，使场景更有梦幻感，而通过面部识别实现切换视角的效果，使场景构建更有立体感。渲染上，突出增加美学的元素，力图将照片上的画面还原到真实情景。
# 三. 实现内容与步骤：
### 页面设计部分
利用css文件设置了网页的种种style元素，构建了界面的主题，而单独使用一个css文件定义，避免了主体html文件过于臃肿的问题。

![image](https://user-images.githubusercontent.com/54164389/135282614-80bbed13-e997-4752-a85a-e8ba7402c395.jpeg)
### 模型素材准备部分
marker的准备，摄像头校正参数的设定，模型选择，特点和加载分析，场景搭建。
天空盒选用了两组图片，在效果上，是实现了一个立体场景的构建和渲染，同时允许根据观察者视角改变摄像头位置。（另一组备用）
Three.min, faca-min, tracking-min的库的准备。

![image](https://user-images.githubusercontent.com/54164389/135282751-56abace0-6f2c-4191-93c9-9b246c56d613.jpeg)

![image](https://user-images.githubusercontent.com/54164389/135282785-08096ab1-be19-483d-b74c-e713e6de6c5a.jpeg)
### 程序框架部分
（初始化与主循环框架的简要描述）
小组将程序重点分为以下部分
#### 1）初始化
设置显示摄像头内容并且设置画布：

![image](https://user-images.githubusercontent.com/54164389/135282876-c53aef6b-ce0c-4416-831b-b98298ba51c9.jpeg)

初始化各种变量，并调用建模函数：

![image](https://user-images.githubusercontent.com/54164389/135282933-f2f1843d-baa7-4e8e-bcb3-44f619baaeeb.jpeg)
#### 2）model.js（建模）
天空盒的构建：

![image](https://user-images.githubusercontent.com/54164389/135283148-9584c8d4-9e0b-4d4f-ba7e-d5177599f204.jpeg)

![image](https://user-images.githubusercontent.com/54164389/135283168-fd48f11c-1926-47d9-a609-e38ed34c1621.jpeg)

场景中动态的镜面立方体的创建（随机地址）：

![image](https://user-images.githubusercontent.com/54164389/135283195-43b84c05-6cb6-4c56-a0b2-1f327e2edc00.jpeg)

#### 3）在摄像头中表示人面位置并获得人面位置

![image](https://user-images.githubusercontent.com/54164389/135283233-6665e587-dd26-4b62-bc5f-f78097a5d1b3.jpeg)

#### 4）设置摄影机视角

![image](https://user-images.githubusercontent.com/54164389/135283252-101e117a-f064-4248-87f7-70ae4fb36316.jpeg)


# 四、程序调试过程：
页面调试方法（console信息查看，断点信息（alert，或 console.log）的方法， network资源查看）利用localhost查看代码及图片素材在网页上展现的效果
路径问题解决，将同一类型的文件均置于以该类型命名的文件夹内，这对于html文件内部函数调用有关内容提供了不小的便捷，而从文件可读性上看，我们将一些基础属性的设置单独建成文件，便利了自己的测试和修改代码的流程。
测试：在增强现实实验文件夹开http-server

![image](https://user-images.githubusercontent.com/54164389/135283417-10bd5031-3991-4db7-a759-0dd0658158d1.jpeg)

在页面进行运行调试

![image](https://user-images.githubusercontent.com/54164389/135283516-6bfba6e1-f416-4325-b274-5a4dff3c2275.jpeg)

八、上传与结果展示：
结果展示效果图

![image](https://user-images.githubusercontent.com/54164389/135283550-7ec1dc11-4f47-47df-919a-ddad492ecb3b.jpeg)
![image](https://user-images.githubusercontent.com/54164389/135283778-026d061c-8900-4893-a24c-a15fb28674ac.jpeg)
![image](https://user-images.githubusercontent.com/54164389/135283994-85bf08c5-a6aa-4a90-bf22-43f7fd82a752.jpeg)



