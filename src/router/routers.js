import Main from '@/components/main'
import parentView from '@/components/parent-view'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInBread: (false) 设为true后此级路由将不会出现在面包屑中，示例看QQ群路由配置
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */

export default [{
        path: '/login',
        name: 'login',
        meta: {
            title: 'Login - 登录',
            hideInMenu: true
        },
        component: () =>
            import ('@/view/login/login.vue')
    },
    {
        path: '/screen_province',
        name: 'screen_province',
        meta: {
            title: '地市医疗废物转运交接实时状态监控',
            hideInMenu: true
        },
        component: () =>
            import ('@/view/screen/index.vue')
    },
    {
        path: '/screen_map',
        name: 'screen_map',
        meta: {
            title: '地市医疗废物转运交接实时状态监控',
            hideInMenu: true
        },
        component: () =>
            import ('@/view/screen/map.vue')
    },
    {
        path: '/',
        name: '_home',
        redirect: '/home',
        component: Main,
        meta: {
            // hideInMenu: true,
            notCache: true
        },
        children: [{
            path: '/home',
            name: 'home',
            meta: {
                // hideInMenu: true,
                title: '首页',
                notCache: true,
                icon: 'md-home'
            },
            component: () =>
                import ('@/view/single-page/home')
        }]
    },
    {
        path: '/area',
        name: 'area',
        meta: {
            icon: 'md-menu',
            title: '区域概况'
        },
        component: Main,
        children: [{
                path: 'area_weight',
                name: 'area_weight',
                meta: {
                    icon: 'md-funnel',
                    title: '按行政区域重量分析'
                },
                component: () =>
                    import ('@/view/area/area_weight.vue')
            },
            {
                path: 'area_medical',
                name: 'area_medical',
                meta: {
                    icon: 'md-funnel',
                    title: '按医废类型重量分析'
                },
                component: () =>
                    import ('@/view/area/area_medical.vue')
            },
            {
                path: 'area_organ',
                name: 'area_organ',
                meta: {
                    icon: 'md-funnel',
                    title: '按机构性质重量分析'
                },
                component: () =>
                    import ('@/view/area/area_organ.vue')
            },
            {
                path: 'area_level',
                name: 'area_level',
                meta: {
                    icon: 'md-funnel',
                    title: '按机构等级重量分析'
                },
                component: () =>
                    import ('@/view/area/area_level.vue')
            },
            {
                path: 'area_car',
                name: 'area_car',
                meta: {
                    icon: 'md-funnel',
                    title: '转运车运输路径管理'
                },
                component: () =>
                    import ('@/view/area/area_car.vue')
            }
        ]
    },
    {
        path: '/organ',
        name: 'organ',
        meta: {
            icon: 'md-menu',
            title: '机构概况'
        },
        component: Main,
        children: [{
                path: 'organ_comprehensive',
                name: 'organ_comprehensive',
                meta: {
                    icon: 'md-funnel',
                    title: '综合分析'
                },
                component: () =>
                    import ('@/view/organ/organ_comprehensive.vue')
            },
            {
                path: 'organ_department',
                name: 'organ_department',
                meta: {
                    icon: 'md-funnel',
                    title: '科室重量分析'
                },
                component: () =>
                    import ('@/view/organ/organ_department.vue')
            },
            {
                path: 'organ_type',
                name: 'organ_type',
                meta: {
                    icon: 'md-funnel',
                    title: '医废类型重量分析'
                },
                component: () =>
                    import ('@/view/organ/organ_type.vue')
            },
            {
                path: 'organ_users',
                name: 'organ_users',
                meta: {
                    icon: 'md-funnel',
                    title: '按机构性质重量分析'
                },
                component: () =>
                    import ('@/view/organ/organ_users.vue')
            },
            {
                path: 'organ_error',
                name: 'organ_error',
                meta: {
                    icon: 'md-funnel',
                    title: '异常预警与管理'
                },
                component: () =>
                    import ('@/view/organ/organ_error.vue')
            },
            {
                path: 'organ_detailed',
                name: 'organ_detailed',
                meta: {
                    icon: 'md-funnel',
                    title: '交接明细分析'
                },
                component: () =>
                    import ('@/view/organ/organ_detailed.vue')
            }
        ]
    },
    {
        path: '/clinical',
        name: 'clinical',
        meta: {
            icon: 'md-menu',
            title: '临床医废管理'
        },
        component: Main,
        children: [{
                path: 'clinical_medical',
                name: 'clinical_medical',
                meta: {
                    icon: 'md-funnel',
                    title: '医废统计'
                },
                component: () =>
                    import ('@/view/clinical/clinical_medical.vue')
            },
            {
                path: 'clinical_record',
                name: 'clinical_record',
                meta: {
                    icon: 'md-funnel',
                    title: '交接记录'
                },
                component: () =>
                    import ('@/view/clinical/clinical_record.vue')
            },
            {
                path: 'clinical_ties',
                name: 'clinical_ties',
                meta: {
                    icon: 'md-funnel',
                    title: '扎带使用记录'
                },
                component: () =>
                    import ('@/view/clinical/clinical_ties.vue')
            },
            {
                path: 'clinical_notice',
                name: 'clinical_notice',
                meta: {
                    icon: 'md-funnel',
                    title: '一键通知'
                },
                component: () =>
                    import ('@/view/clinical/clinical_notice.vue')
            },
        ]
    },
    {
        path: '/collect',
        name: 'collect',
        meta: {
            icon: 'md-menu',
            title: '临床医废收集'
        },
        component: Main,
        children: [{
                path: 'collect_statistics',
                name: 'collect_statistics',
                meta: {
                    icon: 'md-funnel',
                    title: '保洁人员医废收集工作量统计'
                },
                component: () =>
                    import ('@/view/collect/collect_statistics.vue')
            },
            {
                path: 'collect_warn',
                name: 'collect_warn',
                meta: {
                    icon: 'md-funnel',
                    title: '收集车电量预警'
                },
                component: () =>
                    import ('@/view/collect/collect_warn.vue')
            }
        ]
    },
    {
        path: '/enter',
        name: 'enter',
        meta: {
            icon: 'md-menu',
            title: '入缓存间'
        },
        component: Main,
        children: [{
                path: 'enter_weight',
                name: 'enter_weight',
                meta: {
                    icon: 'md-funnel',
                    title: '缓存间医废实时收集重量分析'
                },
                component: () =>
                    import ('@/view/enter/enter_weight')
            },
            {
                path: 'enter_timeout',
                name: 'enter_timeout',
                meta: {
                    icon: 'md-funnel',
                    title: '医废入缓存间超时预警管理'
                },
                component: () =>
                    import ('@/view/enter/enter_timeout.vue')
            },
            {
                path: 'enter_palyer',
                name: 'enter_palyer',
                meta: {
                    icon: 'md-funnel',
                    title: '缓存间交接视频管理'
                },
                component: () =>
                    import ('@/view/enter/enter_palyer.vue')
            }
        ]
    },
    {
        path: '/out',
        name: 'out',
        meta: {
            icon: 'md-menu',
            title: '出缓存间与转运管理'
        },
        component: Main,
        children: [{
                path: 'out_realtime',
                name: 'out_realtime',
                meta: {
                    icon: 'md-funnel',
                    title: '转运车医废实时收集重量分析'
                },
                component: () =>
                    import ('@/view/out/out_realtime.vue')
            },
            {
                path: 'out_timeout',
                name: 'out_timeout',
                meta: {
                    icon: 'md-funnel',
                    title: '医废超时转运预警管理'
                },
                component: () =>
                    import ('@/view/out/out_timeout.vue')
            },
            {
                path: 'out_location',
                name: 'out_location',
                meta: {
                    icon: 'md-funnel',
                    title: '转运车实时定位监控'
                },
                component: () =>
                    import ('@/view/out/out_location.vue')
            },
            {
                path: 'out_collect',
                name: 'out_collect',
                meta: {
                    icon: 'md-funnel',
                    title: '转运车收集明细跟踪'
                },
                component: () =>
                    import ('@/view/out/out_collect.vue')
            }
        ]
    },
    {
        path: '/exception',
        name: 'exception',
        meta: {
            icon: 'md-menu',
            title: '异常预警'
        },
        component: Main,
        children: [{
                path: 'exception_medical',
                name: 'exception_medical',
                meta: {
                    icon: 'md-funnel',
                    title: '未出医废预警'
                },
                component: () =>
                    import ('@/view/exception/exception_medical.vue')
            },
            {
                path: 'exception_enter',
                name: 'exception_enter',
                meta: {
                    icon: 'md-funnel',
                    title: '入缓存间重量预警'
                },
                component: () =>
                    import ('@/view/exception/exception_enter.vue')
            },
            {
                path: 'exception_out',
                name: 'exception_out',
                meta: {
                    icon: 'md-funnel',
                    title: '入缓存间重量预警'
                },
                component: () =>
                    import ('@/view/exception/exception_out.vue')
            },
            {
                path: 'exception_rules',
                name: 'exception_rules',
                meta: {
                    icon: 'md-funnel',
                    title: '违规交接预警'
                },
                component: () =>
                    import ('@/view/exception/exception_rules.vue')
            },
            {
                path: 'exception_etimeout',
                name: 'exception_etimeout',
                meta: {
                    icon: 'md-funnel',
                    title: '入缓存间超时预警'
                },
                component: () =>
                    import ('@/view/exception/exception_etimeout.vue')
            },
            {
                path: 'exception_otimeout',
                name: 'exception_otimeout',
                meta: {
                    icon: 'md-funnel',
                    title: '出缓存间超时预警'
                },
                component: () =>
                    import ('@/view/exception/exception_otimeout.vue')
            },
            {
                path: 'exception_loss',
                name: 'exception_loss',
                meta: {
                    icon: 'md-funnel',
                    title: '遗失预警'
                },
                component: () =>
                    import ('@/view/exception/exception_loss.vue')
            },
            {
                path: 'exception_leakage',
                name: 'exception_leakage',
                meta: {
                    icon: 'md-funnel',
                    title: '泄露预警'
                },
                component: () =>
                    import ('@/view/exception/exception_leakage.vue')
            },
            {
                path: 'exception_damaged',
                name: 'exception_damaged',
                meta: {
                    icon: 'md-funnel',
                    title: '破损预警'
                },
                component: () =>
                    import ('@/view/exception/exception_damaged.vue')
            }
        ]
    },
    {
        path: '/basic',
        name: 'basic',
        meta: {
            icon: 'md-menu',
            title: '基础管理'
        },
        component: Main,
        children: [{
                path: 'basic_user',
                name: 'basic_user',
                meta: {
                    icon: 'md-funnel',
                    title: '用户管理'
                },
                component: () =>
                    import ('@/view/basic/basic_user.vue')
            },
            {
                path: 'basic_area',
                name: 'basic_area',
                meta: {
                    icon: 'md-funnel',
                    title: '用户负责区域管理'
                },
                component: () =>
                    import ('@/view/basic/basic_area.vue')
            },
            {
                path: 'basic_type',
                name: 'basic_type',
                meta: {
                    icon: 'md-funnel',
                    title: '标签分类管理'
                },
                component: () =>
                    import ('@/view/basic/basic_type.vue')
            },
            {
                path: 'basic_use',
                name: 'basic_use',
                meta: {
                    icon: 'md-funnel',
                    title: '标签领用管理'
                },
                component: () =>
                    import ('@/view/basic/basic_use.vue')
            },
            {
                path: 'basic_scrap',
                name: 'basic_scrap',
                meta: {
                    icon: 'md-funnel',
                    title: '标签报废管理'
                },
                component: () =>
                    import ('@/view/basic/basic_scrap.vue')
            }
        ]
    },
    {
        path: '/operate',
        name: 'operate',
        meta: {
            icon: 'md-menu',
            title: '运营管理'
        },
        component: Main,
        children: [{
                path: 'operate_user',
                name: 'operate_user',
                meta: {
                    icon: 'md-funnel',
                    title: '机构用户管理'
                },
                component: () =>
                    import ('@/view/operate/operate_user.vue')
            },
            {
                path: 'operate_tag',
                name: 'operate_tag',
                meta: {
                    icon: 'md-funnel',
                    title: '标签出厂管理和使用监控'
                },
                component: () =>
                    import ('@/view/operate/operate_tag.vue')
            },
            {
                path: 'operate_collect',
                name: 'operate_collect',
                meta: {
                    icon: 'md-funnel',
                    title: '收集车出厂管理和使用监控'
                },
                component: () =>
                    import ('@/view/operate/operate_collect.vue')
            },
            {
                path: 'operate_player',
                name: 'operate_player',
                meta: {
                    icon: 'md-funnel',
                    title: '摄像头出厂管理和使用监控'
                },
                component: () =>
                    import ('@/view/operate/operate_player.vue')
            },
            {
                path: 'operate_bluetooth',
                name: 'operate_bluetooth',
                meta: {
                    icon: 'md-funnel',
                    title: '蓝牙秤出厂管理和使用监控'
                },
                component: () =>
                    import ('@/view/operate/operate_bluetooth.vue')
            },
            {
                path: 'operate_consume',
                name: 'operate_consume',
                meta: {
                    icon: 'md-funnel',
                    title: '耗材使用综合统计'
                },
                component: () =>
                    import ('@/view/operate/operate_consume.vue')
            }
        ]
    },
    {
        path: '/401',
        name: 'error_401',
        meta: {
            hideInMenu: true
        },
        component: () =>
            import ('@/view/error-page/401.vue')
    },
    {
        path: '/500',
        name: 'error_500',
        meta: {
            hideInMenu: true
        },
        component: () =>
            import ('@/view/error-page/500.vue')
    },
    {
        path: '*',
        name: 'error_404',
        meta: {
            hideInMenu: true
        },
        component: () =>
            import ('@/view/error-page/404.vue')
    }
]