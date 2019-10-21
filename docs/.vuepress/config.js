module.exports = {
  base: '/blog/',
  title: 'blog',
  description: 'Vuepress blog demo',
  themeConfig: {
    // 你的GitHub仓库，请正确填写
    repo: 'https://github.com/cocytus1223',
    // 自定义仓库链接文字。
    repoLabel: 'My GitHub',
    nav: [
        { text: 'Home', link: '/' },
        { text: 'FirstBlog', link: '/blog/firstBlog.md' }
    ],
    sidebar: {
        // docs文件夹下面的accumulate文件夹 文档中md文件 书写的位置(命名随意)
        '/blog/': [
          '/blog/', // accumulate文件夹的README.md 不是下拉框形式
          {
            title: 'HTML',
            children: [
              '/blog/firstBlog', // 以docs为根目录来查找文件 
              // 上面地址查找的是：docs>accumulate>JS>test.md 文件
              // 自动加.md 每个子选项的标题 是该md文件中的第一个h1/h2/h3标题
            ]
          }
        ]
    }  
} 
}