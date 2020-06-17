import {
    baseOrgInfo,
    regionGr,
    typeDays,
    recyDataAcuu,
    mwasteWarn,
    mwasteOpertion,
    cityMwasteOpertion,
    cityRegionDispData,
    cityRegionVehData,
    cityRegionPocType,
    cityRegionTrans,
    cityRecyRegionAcuu,
    cityBaseOrgInfobaseOrgInfo
} from '@/api/area'

export default {
    state: {
        baseOrgInfo: {},
        regionGr: {},
        typeDays: {},
        recyDataAcuu: {},
        mwasteWarn: {},
        mwasteOpertion: {},
        cityMwasteOpertion: {},
        cityRegionDispData: {},
        cityRegionVehData: {},
        cityRegionPocType: {},
        cityRegionTrans: {},
        cityRecyRegionAcuu: {},
        cityBaseOrgInfobaseOrgInfo: {},
    },
    mutations: {
        setBaseOrgInfo(state, data) {
            state.baseOrgInfo = data
        },
        setRegionGr(state, data) {
            state.regionGr = data
        },
        setTypeDays(state, data) {
            state.typeDays = data
        },
        setRecyDataAcuu(state, data) {
            state.recyDataAcuu = data
        },
        setMwasteWarn(state, data) {
            state.mwasteWarn = data
        },
        setMwasteOpertion(state, data) {
            state.mwasteOpertion = data
        },
        setCityMwasteOpertion(state, data) {
            state.cityMwasteOpertion = data
        },
        setCityRegionDispData(state, data) {
            state.cityRegionDispData = data
        },
        setCityRegionVehData(state, data) {
            state.cityRegionVehData = data
        },
        setCityRegionPocType(state, data) {
            state.cityRegionPocType = data
        },
        setCityRegionTrans(state, data) {
            state.cityRegionTrans = data
        },
        setCityRecyRegionAcuu(state, data) {
            state.cityRecyRegionAcuu = data
        },
        setCityBaseOrgInfobaseOrgInfo(state, data) {
            state.cityBaseOrgInfobaseOrgInfo = data
        },
    },
    getters: {
        baseOrgInfo: state => state.baseOrgInfo,
        regionGr: state => state.regionGr,
        typeDays: state => state.typeDays,
        recyDataAcuu: state => state.recyDataAcuu,
        mwasteWarn: state => state.mwasteWarn,
        mwasteOpertion: state => state.mwasteOpertion
    },
    actions: {
        //查询全国各等级医疗机构实时上报情况概览
        handleBaseOrgInfo({ commit }, data) {
            return new Promise((resolve, reject) => {
                baseOrgInfo(data).then(res => {
                    commit('setBaseOrgInfo', res.data)
                    resolve(res.data)
                }).catch(err => {
                    reject(err)
                })
            })
        },
        //查询全省综合情况列表
        handleRegionGr({ commit }, data) {
            return new Promise((resolve, reject) => {
                regionGr(data).then(res => {
                    commit('setRegionGr', res.data)
                    resolve(res.data)
                }).catch(err => {
                    reject(err)
                })
            })
        },
        //查询全省综合情况图表
        handleTypeDays({ commit }, data) {
            return new Promise((resolve, reject) => {
                typeDays(data).then(res => {
                    commit('setTypeDays', res.data)
                    resolve(res.data)
                }).catch(err => {
                    reject(err)
                })
            })
        },
        //查询全省不同分类医疗废物实时收集情况
        handleRecyDataAcuu({ commit }, data) {
            return new Promise((resolve, reject) => {
                recyDataAcuu(data).then(res => {
                    commit('setRecyDataAcuu', res.data)
                    resolve(res.data)
                }).catch(err => {
                    reject(err)
                })
            })
        },
        //查询医疗机构废物异常报警 
        handleMwasteWarn({ commit }, data) {
            return new Promise((resolve, reject) => {
                mwasteWarn(data).then(res => {
                    commit('setMwasteWarn', res.data)
                    resolve(res.data)
                }).catch(err => {
                    reject(err)
                })
            })
        },
        //查询医疗机构废物动态操作信息  
        handleMwasteOpertion({ commit }, data) {
            return new Promise((resolve, reject) => {
                mwasteOpertion(data).then(res => {
                    commit('setMwasteOpertion', res.data)
                    resolve(res.data)
                }).catch(err => {
                    reject(err)
                })
            })
        },
        //查询医疗机构废物异常预警  
        handleCityMwasteOpertion({ commit }, data) {
            return new Promise((resolve, reject) => {
                cityMwasteOpertion(data).then(res => {
                    commit('setCityMwasteOpertion', res.data)
                    resolve(res.data)
                }).catch(err => {
                    reject(err)
                })
            })
        },
        //医疗废物实时处置状态   
        handleCityRegionDispData({ commit }, data) {
            return new Promise((resolve, reject) => {
                cityRegionDispData(data).then(res => {
                    commit('setCityRegionDispData', res.data)
                    resolve(res.data)
                }).catch(err => {
                    reject(err)
                })
            })
        },
        //不同类型医疗废物不同环节实时监控数据  
        handleCityRegionPocType({ commit }, data) {
            return new Promise((resolve, reject) => {
                cityRegionPocType(data).then(res => {
                    commit('setCityRegionPocType', res.data)
                    resolve(res.data)
                }).catch(err => {
                    reject(err)
                })
            })
        },
        //地图数据展示   
        handleCityRegionTrans({ commit }, data) {
            return new Promise((resolve, reject) => {
                cityRegionTrans(data).then(res => {
                    commit('setCityRegionTrans', res.data)
                    resolve(res.data)
                }).catch(err => {
                    reject(err)
                })
            })
        },
        //各地市医疗废物收集量实时情况  
        handleCityRecyRegionAcuu({ commit }, data) {
            return new Promise((resolve, reject) => {
                cityRecyRegionAcuu(data).then(res => {
                    commit('setCityRecyRegionAcuu', res.data)
                    resolve(res.data)
                }).catch(err => {
                    reject(err)
                })
            })
        },
        //区域基本概况   
        handleCityBaseOrgInfobaseOrgInfo({ commit }, data) {
            return new Promise((resolve, reject) => {
                cityBaseOrgInfobaseOrgInfo(data).then(res => {
                    commit('setCityBaseOrgInfobaseOrgInfo', res.data)
                    resolve(res.data)
                }).catch(err => {
                    reject(err)
                })
            })
        },
        //医疗运输状态   
        handleCityRegionVehData({ commit }, data) {
            return new Promise((resolve, reject) => {
                cityRegionVehData(data).then(res => {
                    commit('setCityRegionVehData', res.data)
                    resolve(res.data)
                }).catch(err => {
                    reject(err)
                })
            })
        },
    }
}