# 艺术作品集使用说明

## 配置方法

编辑 `config.json` 文件即可更新所有内容。

### 首页配置
```json
"homepage": {
  "backgroundImage": "images/bg.jpg",  // 背景图路径
  "title": "你的名字",
  "subtitle": "你的职业描述",
  "contact": {
    "phone": "手机号",
    "email": "邮箱"
  }
}
```

### 添加作品模块
```json
"categories": [
  {
    "id": "模块ID",
    "name": "模块名称",
    "thumbnail": "images/categories/封面.jpg",
    "works": [
      {
        "cover": "images/works/作品封面.jpg",
        "title": "作品标题",
        "description": "作品描述",
        "bvid": "B站视频BV号"
      }
    ]
  }
]
```

## 图片准备

1. 背景图：放在 `images/bg.jpg`
2. 模块封面：放在 `images/categories/`
3. 作品封面：放在 `images/works/`

## 部署到GitHub Pages

1. 复制整个 `art` 文件夹
2. 推送到 `你的用户名.github.io` 仓库
3. 访问 `https://你的用户名.github.io/art`
