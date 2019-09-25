import axios from 'axios'

export function getSummary() {
    const request = axios.get('localhost:3003/api/dashboard/v1/dashboards')
    return { type: 'DASHBOARD_FETCHED', payload: request }
}