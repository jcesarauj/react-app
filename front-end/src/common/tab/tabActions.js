import { TAB_SELECTED, TAB_SHOWED } from './tabActionsType'

export const selectTab = (tabId) => {
    return {
        type: TAB_SELECTED,
        payload: tabId
    }
}

export const showTabs = (...tabIds) => {
    const tabsToShow = {}
    tabIds.forEach(e => tabsToShow[e] = true)
    return {
        type: TB_SHOWED,
        payload: tabsToShow
    }
}