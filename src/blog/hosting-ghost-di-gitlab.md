---
title: "Hosting Ghost (static page) di Gitlab"
path: "/hosting-ghost-di-gitlab/"
date: "2017-09-11T10:57:00.169Z"
tags: Startups, blog
draft: false
---

Hah setan? bukan mas, **ghost** adalah *platform* untuk menulis *blog* sama seperti *wordpress*. Kita bisa simpan *blog* kita di :
* *server* [ghost](https://ghost.org) dengan harga $5,00/bulan (mahal untuk saya yang fakir).
* *server container 3rd party* seperti : [digitalocean](https://digitalocean.com),  [openshift](https://openshift.com).
* **gitlab** / github / bitbucket berupa *static page* (tidak ada *database*).

# Cara *Hosting* di gitlab:
##1. install **ghost** di komputer lokal.

install **ghost** *command line* versi terbaru:

```bash
npm install -g ghost-cli@latest
```

membuat & masuk folder **ghost-blog**
```bash
mkdir ghost-blog
cd ghost-blog
```

instalasi :
`ghost install local`

ntaps, instalasi berhasil dan akses ghost di [localhost](http://localhost:2368/)
![instalasi-selesai](/images/hosting-ghost-di-gitlab/ghost-local.png)

untuk url CMS / *admin* : [localhost:2368/ghost](http://localhost:2368/ghost).

##2. generate *static page* dengan buster.
```bash
brew install pip
pip install buster
buster setup
```

input url untuk gitlab project. contoh **https://gitlab.com/busylessman/ghost-blog**

```bash
buster generate --domain=http://localhost:2368
```

##3. upload *static page* ke gitlab
### create .gitlab-ci.yml
```bash
cd static
vim .gitlab-ci.yml
```
copy paste :
```bash
pages:
  stage: deploy
  script:
  - rm -rf public
  - mkdir .public
  - cp -r * .public
  - mv .public public
  artifacts:
    paths:
    - public
  only:
  - master
```

###create gitlab project
akses url : https://gitlab.com/projects/new
contoh isi project name : ghost-blog
"create project"

###upload static page
pastikan berada di folder static
`pwd`
maka akan muncul
```bash
/Users/username/Documents/ghost-blog/static
```

Git global setup
```bash
git config --global user.name "username"
git config --global user.email "alamat@email.com"
```

mulai upload:<br>
ganti *username* dengan akun gitlab.
```bash{3}
cd existing_folder
git init
git remote add origin git@gitlab.com:username/ghost-blog.git
git add .
git commit -m "upload ghost static page"
git push -u origin master
```

#done!
bisa akses demo **ghost** di [https://busylessman.gitlab.io/ghost-blog/](https://busylessman.gitlab.io/ghost-blog/)

source / reference :
[https://portallinux.es/configuracion-ghost-usarlo-gitlab-pages/](https://portallinux.es/configuracion-ghost-usarlo-gitlab-pages/)

notes:
- pip : python packages manager
- python : programming language, sama seperti php, ruby, javascript dst.
