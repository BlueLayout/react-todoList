import request from '../../utils/request'

export function getTODOs() {
    return request({
        url: `/todos`,
        method: 'get'
    })
}

export function updateTODOs(id) {
    return request({
        url: `/todos/${id}`,
        method: 'put'
    })
}

export function createTODOs(todo) {
    return request({
        url: `/todos`,
        method: 'post',
        todo
    })
}

export function deleteTODOs(id) {
    return request({
        url: `/todos/${id}`,
        method: 'delete'
    })
}