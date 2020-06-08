import { wapService } from '../services/wap.service.js'
import cloudinaryService from "../services/cloudinary.service.js";
import Vue from 'vue'

export default ({
	state: {
		waps: [],
		wap: {},
		selectedCmp: {},
	},
	getters: {
		waps(state) {
			return state.waps;
		},
		wap(state) {
			return state.wap;
		},
		cmps(state) {
			return state.wap.cmps;
		},
		selectedCmp(state) {
			return state.selectedCmp
		},
		wapTheme(state) {
			return state.wap.theme;
		},
		makeId() {
			return wapService.makeId()
		}
	},
	mutations: {
		setWaps(state, { waps }) {
			state.waps = waps
		},
		setWap(state, { wap }) {
			state.wap = wap
		},
		updateCmps(state, { cmps }) {
			state.wap.cmps = cmps
			state.wap = updatedWap
		},
		addCmp(state, { addedCmp }) {
			state.wap.cmps.push(addedCmp)
		},
		updateWap(state, { updatedCmp }) {
			const idx = state.wap.cmps.findIndex(currCmp => currCmp.id === updatedCmp.id)
			state.wap.cmps.splice(idx, 1, updatedCmp)
		},
		updateWapPrefs(state, { wapPrefs }) {
			const wapCopy = JSON.parse(JSON.stringify(wapPrefs))
			state.wap.theme = wapCopy.theme
			state.wap.title = wapCopy.title
		},
		removeCmp(state, { cmpId }) {
			const idx = state.wap.cmps.findIndex(currCmp => currCmp.id === cmpId)
			state.wap.cmps.splice(idx, 1)
		},
		setSelectedCmp(state, { cmp }) {
			state.selectedCmp = cmp
		},
		changeWapTheme(state, { theme }) {
			state.wap.theme = theme
		},
		changeWapTitle(state, { title }) {
			state.wap.title = title
		},
		updatePos(state, { updatedPos }) {
			const idx = state.wap.cmps.findIndex(cmp => cmp.id === updatedPos.cmp.id)
			if (idx + updatedPos.diff > 0 || idx + updatedPos.diff < state.wap.cmps.length)
				state.wap.cmps.splice(idx, 1)
			state.wap.cmps.splice(idx + updatedPos.diff, 0, updatedPos.cmp)
		},
		updateImg(state, { url }) {
			state.selectedCmp.imgUrl = url
		},
	},
	actions: {
		async loadWaps(context) {
			const waps = await wapService.query()
			context.commit({ type: 'setWaps', waps })
			return waps
		},
		async loadWap(context, { wapId }) {
			const wap = await wapService.getById(wapId)
			Vue.delete(wap, '_id')
			context.commit({ type: 'setWap', wap })
			return wap
		},
		updateCmp(context, { cmp }) {
			const cmpCopy = JSON.parse(JSON.stringify(cmp))
			const wapCopy = JSON.parse(JSON.stringify(context.state.wap))
			const wap = wapService.updateWap(wapCopy, cmpCopy)
			context.commit({
				type: 'setWap',
				wap
			})
			context.commit({
				type: 'setSelectedCmp',
				cmp
			})
		},
		async uploadImg(context, { ev }) {
			context.commit({ type: 'setInProgress', inProgress: true })
			const res = await cloudinaryService.uploadImg(ev);
			context.commit({ type: 'setInProgress', inProgress: false })
			var { url } = res;
			url = (url) ? url : "http://res.cloudinary.com/omer1234/image/upload/v1584998858/li0hhzwliqjrqcqv2coz.jpg";
			context.commit({ type: 'updateImg', url })
			context.dispatch({ type: 'updateCmp', cmp: context.state.selectedCmp })
		},
		addCmp(context, { cmp }) {
			var cmpCopy = JSON.parse(JSON.stringify(cmp))
			var addedCmp = wapService.replaceIds(cmpCopy);
			context.commit({
				type: 'addCmp',
				addedCmp
			})
		},
		async saveWap(context) {
			context.commit({ type: 'setInProgress', inProgress: true })
			const wap = await wapService.add(context.state.wap)
			context.commit({ type: 'setInProgress', inProgress: false })
			return wap
		},
	}
})

