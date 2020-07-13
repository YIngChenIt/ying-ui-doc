module.exports = {
    title: 'ying-ui', // 设置网站标题
    description: 'ui 库', //描述
    dest: './build', // 设置输出目录
    port: 1234, //端口
    themeConfig: { //主题配置
        // displayAllHeaders: true,
        lastUpdated: 'Last Updated',
        smoothScroll: true,
        nav: [
            {
                text: '个人博客',
                link: 'https://github.com/YIngChenIt/Blogs'
            },
            {
                text: 'github',
                link: 'https://github.com/YIngChenIt/ying-ui'
            },
        ],
        // 为以下路由添加侧边栏
        sidebar: {
            '/components/': [{
                title: 'Basic',
                collapsable: true,
                children: [
                    'button',
                    'layout',
                    'container'
                ]
            },
            {
                title: 'Form',
                collapsable: true,
                children: [
                    'input'
                ]
            }]
        }
    },
    plugins: [
        'vuepress-plugin-element-tabs',
        '@vuepress/back-to-top',
    ]
}