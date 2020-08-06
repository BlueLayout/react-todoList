import request from '../../utils/request'

export function getTODOs() {
    return request({
        url: `/todos`,
        method: 'get'
    })
}

export function updateTODOs(id, todo) {
    return request({
        url: `/todos/${id}`,
        method: 'put',
        data: todo
    })
}

export function createTODOs(todo) {
    return request({
        url: `/todos`,
        method: 'post',
        data: todo
    })
}

export function deleteTODOs(id) {
    return request({
        url: `/todos/${id}`,
        method: 'delete'
    })
}