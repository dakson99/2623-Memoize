Ako hocemo da pretvorimo string u broj samo stavimo znak + ispre +'23' 
isNan nije dobar nacin za proveru da li je vrednost broj, jer ne uziba u obzir slucaj upotrebe beskonacnosti. BOlje resenje za to je isFinite.

BIgInt korsitimo za velike brojeve i ne bi trebalo da se mesaju sa regularnim brojevima. Line 346 i 347