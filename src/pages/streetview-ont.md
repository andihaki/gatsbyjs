---
title: "Streetview: ONT Monitoring"
date: "2018-11-28"
---

halaman / aplikasi ini menampilkan status perangkat ONT (Optical Network Terminal) dari tiap OLT (Optical Line Terimal)

fungsi :
memonitor jumlah ONT yang mati

> _preview_ :

<video controls width="100%" height="325px">
    <source src="/images/portofolio/streetview-ont/ONT-monitoring.webm" type="video/webm">
</video>

_front-end_ :
1. menggunakan ajax untuk mengambil data dari _database_
2. jika data belum tersedia, maka akan menampilkan informasi _loading_ berupa _spinner_

_back-end_ :
1. pada OLT,  setiap hari dengan _crontab_ akan _login, running command, parse data & insert_ ke _database_
2. memungkinkan untuk _capture_ status terbaru dari ONT setiap customer, seperti berikut:

<!-- ![ont](/images/portofolio/streetview-ont/ont.png) -->
![ont-customer](/images/portofolio/streetview-ont/ont-customer.png)
