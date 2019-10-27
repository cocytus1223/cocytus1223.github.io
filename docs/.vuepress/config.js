module.exports = {
  base: '/',
  title: '我的学习笔记',
  description: 'Nocky Maruko',
  themeConfig: {
    // 你的GitHub仓库，请正确填写
    repo: 'https://github.com/cocytus1223',
    // 自定义仓库链接文字。
    repoLabel: 'My GitHub',
    nav: [
        { text: '主页', link: '/' },
        { text: '前端', link: '/blog/Html.md' },
        { text: 'Node.js', link: '/nodejs/Introduction.md'}
    ],
    sidebar: {
        '/blog/': [
          {
            title: 'HTML',
            children: [
              '/blog/Html',
              '/blog/Css',
              '/blog/JavaScript',
              '/blog/Vue',
              '/blog/React',
              '/blog/Browser',
              '/blog/Http',
              '/blog/Performance',
              '/blog/Safety'
            ]
          }
        ],
        '/nodejs': [
          {
            title: 'Node.js',
            children: [
              '/nodejs/Introduction',
              '/nodejs/Module',
              '/nodejs/AsyncIO',
              '/nodejs/Async',
              '/nodejs/RAM',
              '/nodejs/Buffer',
              '/nodejs/Network'
            ]
          }
        ]
    }  
} 
}