import HttpService from './http.service.js'

const gWap = {
    _id: 'wap92829',
    title: 'My First Wap',
    theme: 'Light and Shiny',
    style: {},
    cmps: [
        {
            id: 'cmp100',
            type: 'app-nav',
            style: {},
            subClass: 'light-and-shiny',
            children: [
                {
                    id: 'log1zxcv',
                    type: 'h1',
                    txt: 'Gizmo',
                    style: {}
                },
                {
                    id: 'lin12az',
                    type: 'a',
                    to: 'app-header',
                    txt: 'Home',
                    style: {}
                },
                {
                    id: 'lin16aq',
                    type: 'a',
                    to: 'app-contact-us',
                    txt: 'Contact',
                    style: {}

                },

                {
                    id: 'lin1vraz',
                    type: 'a',
                    to: 'app-article',
                    txt: 'About',
                    style: {}
                }
            ]
        },

        {
            id: 'cmp10111',
            type: 'app-header',
            style: {},
            subClass: 'light-and-shiny',
            imgUrl: 'https://i.pinimg.com/originals/a0/c7/c8/a0c7c89aa08d5a04ed5c81d724399411.jpg',
            children: [
                {
                    id: 'saw21a',
                    type: 'button',
                    txt: 'Try me',
                    style: {},
                },
                {
                    id: 'tre12',
                    type: 'p',
                    txt: 'We sell corona',
                    style: {},
                },
            ],
        },
        {
            id: 'cmpa103',
            type: 'layout-2-columns',
            style: {},
            subClass: 'light-and-shiny',
            children: [
                {
                    id: 'cmp12',
                    type: 'app-card',
                    style: {},
                    subClass: 'light-and-shiny',
                    children: [
                        {
                            id: 'saoomor1a',
                            type: 'img',
                            imgUrl: 'https://static.wixstatic.com/media/84770f_346b425b1fe54554a98a4425fa8333cb~mv2_d_3760_3760_s_4_2.jpg/v1/fill/w_479,h_479,al_c,q_80,usm_0.66_1.00_0.01/84770f_346b425b1fe54554a98a4425fa8333cb~mv2_d_3760_3760_s_4_2.webp',
                            style: {},
                        },
                        {
                            id: 'tr31e12',
                            type: 'p',
                            txt: 'Do it now',
                            style: {},
                        },
                        {
                            id: 'sao1w21a',
                            type: 'button',
                            txt: 'Try me',
                            style: {},
                        },

                    ]
                },
                {
                    id: 'cmp1ad2',
                    type: 'app-card',
                    style: {},
                    subClass: 'light-and-shiny',
                    children: [{
                        id: 'sadani3mor1a',
                        type: 'img',
                        imgUrl: 'https://image.freepik.com/free-vector/vintage-photography-badge_23-2147504323.jpg?1',
                        style: {},
                    },
                    {
                        id: 'tr4gc1e12',
                        type: 'p',
                        txt: 'Do it now',
                        style: {},
                    },
                    {
                        id: 's0aaqo1w2a',
                        type: 'button',
                        txt: 'Try me',
                        style: {},
                    },

                    ]
                },
            ]

        },

        {
            id: 'cmp104',
            type: 'app-card',
            style: {},
            subClass: 'light-and-shiny',
            children: [{
                id: 'sa12mqfo',
                type: 'img',
                imgUrl: 'https://image.freepik.com/free-vector/vintage-photography-badge_23-2147504323.jpg?1',
                style: {},
            },
            {
                id: 'tr4vgcpa2',
                type: 'p',
                txt: 'Do it now',
                style: {},
            },
            {
                id: 's0apaq1w27',
                type: 'button',
                txt: 'Try me',
                style: {},
            },

            ]
        },
        {
            id: 'cmp106',
            type: 'app-contact',
            style: {},
            subClass: 'light-and-shiny',
            children: [
                {
                    id: 't2r4pa2',
                    type: 'p',
                    txt: 'CONTACT',
                    style: {},
                },
                {
                    id: 'trbxspa2',
                    type: 'p',
                    txt: 'Tel Aviv Bacher 4',
                    style: {},
                },
                {
                    id: 'zr4v0a2',
                    type: 'p',
                    txt: '123-456-7890',
                    style: {},
                },
                {
                    id: 'sqwcpa2',
                    type: 'p',
                    txt: 'gizmo@gizmo.com',
                    style: {},
                },
            ],
        },

        {
            id: 'cmp11szi',
            type: 'app-social-links',
            style: {},
            subClass: 'light-and-shiny',
            children: [
                {
                    id: 'soch7z',
                    social: 'facebook',
                    url: 'www.facebook.com',
                    style: {}
                },
                {
                    id: 'soc1qzo',
                    social: 'github',
                    url: 'www.github.com',
                    style: {}
                },
                {
                    id: 'socro14q',
                    social: 'instagram',
                    url: 'www.instagram.com',
                    style: {}
                },
            ]

        },
        {
            id: 'cmp102',
            type: 'app-map',
            style: { width: '500', height: '500' },

            center: { lat: 32.519, lng: 34.9045 },
            markers: [{ position: { lat: 32.519, lng: 34.9045 } }]
        },
        {
            id: 'cmp109',
            type: 'layout-3-columns',
            style: {},
            subClass: 'light-and-shiny',
            children: [{
                id: 'cmp103',
                type: 'app-article',
                style: {},
                subClass: 'light-and-shiny',
                children: [
                    {
                        id: 'yldor1a',
                        type: 'p',
                        txt: 'Article title',
                        style: {},
                    },
                    {
                        id: 'xr4g2e1p',
                        type: 'p',
                        txt: 'Article sub title',
                        style: {},
                    },
                    {
                        id: 'q0aewg2a',
                        type: 'p',
                        txt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eos earum? Suscipit, dicta sunt quia pariatur laborum sed tempore qui vero, dignissimos, modi iure quae quos at repellat mollitia. Numquam?',
                        style: {},
                    },

                ]
            },
            {
                id: 'cmp1ope3',
                type: 'app-article',
                style: {},
                subClass: 'light-and-shiny',
                children: [{
                    id: 'vgyvkvhc',
                    type: 'p',
                    txt: 'Article title',
                    style: {},
                },
                {
                    id: 'ccgchkufu',
                    type: 'p',
                    txt: 'Article sub title',
                    style: {},
                },
                {
                    id: 'q0ppewg2a',
                    type: 'p',
                    txt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eos earum? Suscipit, dicta sunt quia pariatur laborum sed tempore qui vero, dignissimos, modi iure quae quos at repellat mollitia. Numquam?',
                    style: {},
                },

                ]
            },
            {
                id: 'cmp13rt3',
                type: 'app-article',
                style: {},
                subClass: 'light-and-shiny',
                children: [{
                    id: 'ylkkfa1a',
                    type: 'p',
                    txt: 'Article title',
                    style: {},
                },
                {
                    id: 'xrzzlp',
                    type: 'p',
                    txt: 'Article sub title',
                    style: {},
                },
                {
                    id: 'q0poq2a',
                    type: 'p',
                    txt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eos earum? Suscipit, dicta sunt quia pariatur laborum sed tempore qui vero, dignissimos, modi iure quae quos at repellat mollitia. Numquam?',
                    style: {},
                },

                ]
            },
            ]
        },
        {
            id: 'cmp107',
            type: 'app-chat',
            style: {},
            subClass: 'light-and-shiny',
            title: 'Chat',
        },
        {
            id: 'cca29',
            type: 'app-youtube',
            style: {},
            subClass: 'light-and-shiny',
            title: "B.B.King",
            url: "https://www.youtube.com/embed/Y57kLy1vV1c"
        },
        {
            id: 'cmp105',
            type: 'app-footer',
            style: {},
            subClass: 'light-and-shiny',
            children: [
                {
                    id: 'zqers4',
                    type: 'p',
                    txt: 'Cofferights',
                    style: {},
                },
                {
                    id: 'cmp11rzeq0',
                    type: 'social-links',
                    style: {},
                    subClass: 'light-and-shiny',
                    children: [
                        {
                            id: 'socpovdsaz',
                            social: 'facebook',
                            url: 'www.facebook.com',
                            style: { color: 'red' }
                        },
                        {
                            id: 'soc343jzo',
                            social: 'github',
                            url: 'www.github.com',
                            style: {}
                        },
                        {
                            id: 'svnv4q',
                            social: 'instagram',
                            url: 'www.instagram.com',
                            style: {}
                        },
                    ]

                },
            ]
        },
    ]
}

export const wapService = {
    query,
    getById,
    remove,
    update,
    add,
    updateWap,
    makeId,
    replaceIds
}


function query() {
    return HttpService.get('wap')
}

function getById(id) {
    return HttpService.get(`wap/${id}`)
}

function remove(id) {
    return HttpService.delete(`wap/${id}`)
}

function update(wap) {
    return HttpService.put(`wap/${wap._id}`, wap)
}
function add(wap) {
    return HttpService.post('wap', wap)
}


function updateWap(wap, cmp) {
    if (cmp.type === 'app-youtube') {
        const youtubeId = _getYoutubeVidId(cmp.url)
        cmp.url = 'https://www.youtube.com/embed/' + youtubeId
    }
    wap.cmps.forEach((currCmp, idx) => {
        var node = _findNode(cmp, currCmp)
        if (node) {
            if (node.id === currCmp.id) {
                wap.cmps.splice(idx, 1, cmp)
            }
            else if (node.children) {
                const childIdx = node.children.findIndex(childCmp => childCmp.id === cmp.id)
                node.children.splice(childIdx, 1, cmp)
            } else {
                const nodeIdx = currCmp.children.findIndex(nodeCmp => nodeCmp.id === cmp.id)
                currCmp.children.splice(nodeIdx, 1, cmp)
            }
        }
    })
    return wap
}

function _findNode(cmp, currentNode) {

    if (cmp.id === currentNode.id) {
        return currentNode;
    } else if (currentNode.children) {

        for (var i = 0; i < currentNode.children.length; i++) {
            var currentChild = currentNode.children[i];

            var result = _findNode(cmp, currentChild);
            if (result) {
                return currentChild;
            }
        }
        return false;
    } else {
        return false
    }
}

function replaceIds(cmp) {
    if (cmp.id) {
        cmp.id = makeId();
    }
    if (cmp.children) {
        for (var child of cmp.children) {
            (child.children) ? replaceIds(child) : child.id = makeId();
        }
    }
    return cmp
}

function makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function _getYoutubeVidId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return (match && match[2].length === 11)
        ? match[2]
        : '';
}

// function addCmp(cmp) {
//     let wap = storageService.load(WAP_KEY)
//     cmp.id = _makeId()
//     wap.cmps.push(cmp);
//     storageService.store(WAP_KEY, wap)
//     return Promise.resolve(cmp)
// }