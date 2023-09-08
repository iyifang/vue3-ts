import { type RouteLocationNormalized, type RouteComponent } from 'vue-router'

declare global{
    interface ToRouteType extends RouteLocationNormalized {
        meta: CustomizeRouteMeta;
    }

    /* 子路由规则 */
    interface RouteChildrenConfigsTable {
        /* 路由地址 */
        path: string;
        /* 路由名称，不可重复，必须与组件名称相同 */
        name?: string;
        /* 重定向 */
        redirect?: string;
        /* 按需加载组件 */
        component?: RouteComponent;
        /* 路由元信息 */
        meta?: MetaConfigsTable;
        /* 子路由 */
        children?: Array<RouteChildrenConfigsTable>
        /** 是否显示父级菜单 `可选` */
        showParent?: boolean;
    }

    /* 路由元信息规则 */
    interface MetaConfigsTable {
        /* 菜单名称 */
        title: string;
        /* 菜单权限 */
        roles: Array<number>;
        /* 菜单图标 */
        icon?: string;
        /* 是否现在在菜单栏 */
        showLink?: boolean;
        /* 路由组件缓存 */
        keepAlive?: boolean;
        /** 菜单升序排序，值越高排的越后（只针对顶级路由） */
        rank?: number;
    }

    /* 完整路由规则 */
    interface RouteConfigsTable {
        /* 路由名称 */
        path: string;
        /* 路由名称 */
        name?: string;
        /* Layout组件 */
        component?: RouteComponent;
        /* 重定向 */
        redirect?: string;
        /* 路由元数据 */
        meta?: {
            /* 菜单名称 */
            title: string;
            /* 菜单图标 */
            icon?: string;
            /* 是否显示在菜单 */
            showLink?: boolean;
            /* 菜单升序，越大越后 */
            rank?: number;
        };
        children?: Array<RouteChildrenConfigsTable>
    }

}
// https://router.vuejs.org/zh/guide/advanced/meta.html#typescript
declare module "vue-router" {
    interface RouteMeta extends CustomizeRouteMeta {}
}