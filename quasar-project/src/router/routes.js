const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') },
               { path: '/users', component: () => import('pages/UsersPage.vue') },
               { path: '/noveKnjige', component: () => import('pages/NoveKnjigePage.vue') },
               { path: '/popisKnjiga', component: () => import('pages/PopisKnjigaPage.vue') }]
    
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
