import stream from 'mithril/stream'

export const hasTag = tag => action =>
    action.tags.includes(tag) && action || stream.HALT
