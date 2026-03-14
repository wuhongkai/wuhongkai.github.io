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

### 推荐尺寸
1. **背景图**：`images/bg.jpg` - 推荐 1920x1080px
2. **模块封面**：`images/categories/` - 推荐 800x400px
3. **作品封面**：`images/works/` - 推荐 600x400px

### 自动适配
- 所有图片会自动裁剪适配显示区域
- 使用 `object-fit: cover` 保持比例
- 支持 jpg、png、webp 格式

## 部署到GitHub Pages

1. 复制整个 `art` 文件夹
2. 推送到 `你的用户名.github.io` 仓库
3. 访问 `https://你的用户名.github.io/art`

## 更新内容后推送

修改 `config.json` 或添加图片后，执行：

```bash
cd E:\project\personal_Portfolio
git add art/
git commit -m "Update portfolio content"
git push origin main
```

或简化为一行：

```bash
cd E:\project\personal_Portfolio && git add art/ && git commit -m "Update content" && git push origin main
```
