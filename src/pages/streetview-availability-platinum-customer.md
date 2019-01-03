---
title: "Streetview: Availability Platinum Customer"
date: "2018-09-27"
---

#### Availability Platinum Customer

halaman / aplikasi ini menampilkan persentase dari berapa lama link (fiber optic) mengalami gangguan (down) perhari

fungsi :
meningkatkan _awerness_ jika terjadi penurunan persentase, karena akan ada _penalty_ untuk _threshold_ tertentu.

> _preview_ :

<video controls width="100%" height="325px">
    <source src="/images/portofolio/streetview-availability-platinum-customer/availability-platinum-customer.webm" type="video/webm">
</video>



_front-end_ :
1. _render_ tabel sesuai dengan _customer name_ dan jumlah hari (tanggal) dalam satu bulan
2. _transform_ data dari _back-end_ untuk ditempatkan di setiap _customer name_ dan tanggal
3. _on click_ menampilkan nomor tiket di hari tsb. :sunglasses:

_back-end_ :
1. _query_ data _platinum customer name &_ jumlah site aktif dari _database_ MySQL
2. _query_ data _problem start, problem end & platinum customer name_ dari _database_ sql-server
3. convert _problem start & problem end_ ke _date format_
4. perhitungan durasi = _problem end_ - _problem start_. jika durasi > satu hari, maka sisa durasi dimasukkan di tanggal berikutnya
5. jumlahkan total durasi pada tiap tanggal, karena dalam satu tanggal (hari) bisa terdapat > satu _problem_

_tech-stacks_ :
bootstrap3, php5.5, jQuery1.11.1

<!-- ![availability-platinum-customer](/images/portofolio/streetview-availability-platinum-customer/availability-platinum-customer.png) -->
