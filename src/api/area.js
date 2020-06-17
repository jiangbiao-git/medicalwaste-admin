import axios from '@/libs/api.request'

export const baseOrgInfo = (data) => {
    return axios.request({
        url: 'mwaste-gateway/openApi/provrpt/getBaseOrgInfo',
        data,
        method: 'post'
    })
}
export const regionGr = (data) => {
    return axios.request({
        url: 'mwaste-gateway/openApi/provrpt/getRegionGr',
        data,
        method: 'post'
    })
}
export const typeDays = (data) => {
    return axios.request({
        url: 'mwaste-gateway/openApi/provrpt/getTypeDays',
        data,
        method: 'post'
    })
}
export const recyDataAcuu = (data) => {
    return axios.request({
        url: 'mwaste-gateway/openApi/provrpt/getRecyDataAcuu',
        data,
        method: 'post'
    })
}
export const mwasteWarn = (data) => {
    return axios.request({
        url: 'mwaste-gateway/openApi/provrpt/getMwasteWarn',
        data,
        method: 'post'
    })
}
export const mwasteOpertion = (data) => {
    return axios.request({
        url: 'mwaste-gateway/openApi/provrpt/getMwasteOpertion',
        data,
        method: 'post'
    })
}
export const cityBaseOrgInfobaseOrgInfo = (data) => {
    return axios.request({
        url: 'mwaste-gateway/openApi/citytransport/getCityBaseOrgInfo',
        data,
        method: 'post'
    })
}

export const cityRecyRegionAcuu = (data) => {
    return axios.request({
        url: 'mwaste-gateway/openApi/citytransport/getRecyRegionAcuu',
        data,
        method: 'post'
    })
}
export const cityRegionTrans = (data) => {
    return axios.request({
        url: 'mwaste-gateway/openApi/citytransport/getRegionTrans',
        data,
        method: 'post'
    })
}

export const cityRegionPocType = (data) => {
    return axios.request({
        url: 'mwaste-gateway/openApi/citytransport/getRegionPocType',
        data,
        method: 'post'
    })
}
export const cityRegionVehData = (data) => {
    return axios.request({
        url: 'mwaste-gateway/openApi/citytransport/getRegionVehData',
        data,
        method: 'post'
    })
}
export const cityRegionDispData = (data) => {
    return axios.request({
        url: 'mwaste-gateway/openApi/citytransport/getRegionDispData',
        data,
        method: 'post'
    })
}

export const cityMwasteOpertion = (data) => {
    return axios.request({
        url: 'mwaste-gateway/openApi/citytransport/getMwasteOpertion',
        data,
        method: 'post'
    })
}