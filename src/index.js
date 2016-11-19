import m from 'mithril'
import stream from 'mithril/stream'
import scan from 'mithril/stream/scan'
import scanMerge from 'mithril/stream/scanMerge'

stream.scan = scan
stream.scanMerge = scanMerge
m.stream = stream

m.render(document.getElementById('app'), m('div', 'Hello World'))
