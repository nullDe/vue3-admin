
/**
 * @name  AutoRegistryComponents
 * @description 按需加载，自动引入组件
 */
import autoImportComponents from 'unplugin-vue-components/vite'
export const AutoRegistryComponents = () => {
    return autoImportComponents({
        // dirs: ['src/components'],
        deep: true, //开启搜索字目录 
        dirs: ['src/components/'], //自动引入的目录
        dts: 'src/components.d.ts', // 生产d.ts文件
        include: [/\.vue$/, /\.vue\?vue/],
        exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
    })

}