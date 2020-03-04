import { getField, updateField } from 'vuex-map-fields';

const state = {
    step: 1,
    one: {
        nameFirst: '',
        nameMiddle: '',
        nameLast: '',
        address: {
            street: '',
            city: '',
            state: '',
            zip: ''
        },
        phone: '',
        email: ''
    },
    two: {
        address: {
            street: '',
            city: '',
            state: '',
            zip: ''
        },
        phone: '',
        municipality: ''
    },
    three: {
        applicant_type: '',
        property_use: '',
        property_type: '',
        roof_type: '',
        wall_type: '',
        underground_floors: '',
        storm_shutters: '',
        adjacent_structures: '',
        number_of_stories: '',
        distance_from_coastline: '',
        distance_above_sea: ''
    },
    four: {
        securities: []
    },
    five: {
        dwelling_amount: '',
        other_structures: '',
        outdoor_property: '',
        contents: '',
        loss_of_rents: '',
        liability: '',
        valuable_items: '',
        money_securties: '',
        glass_breakage: '',
        electronics: ''
    }
}

const getters = {
    getField
}

const mutations = {
    updateField
}

const actions = {
}

export default {
    state,
    getters,
    mutations,
    actions
}