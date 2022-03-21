/**
 * @name createVitePlugins
 * @description 封装plugins数组统一调用
 */
import type { Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import { AutoRegistryComponents } from './component';
import { AutoImportDeps } from './autoImport';
import { ConfigRestartPlugin } from './restart'

 
export function createVitePlugins(isBuild: boolean) {
    const vitePlugins: (Plugin | Plugin[])[] = [
        // vue支持
        vue(),
        // 自动按需引入组件
        AutoRegistryComponents(),
        // 自动按需引入依赖
        AutoImportDeps(),
        // 监听配置文件改动重启
        ConfigRestartPlugin(),
    ];
    
    return vitePlugins;
}
