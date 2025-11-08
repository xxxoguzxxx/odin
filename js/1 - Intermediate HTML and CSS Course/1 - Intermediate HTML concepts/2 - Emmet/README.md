# Emmet - HTML ve CSS için H1zl1 Yaz1m Arac1

## Emmet Nedir?

Emmet, web geli_tiricilerin HTML ve CSS kodlar1n1 çok daha h1zl1 yazmalar1n1 salayan güçlü bir k1sayol arac1d1r. CSS benzeri seçiciler kullanarak h1zl1ca HTML yap1lar1 olu_turabilirsiniz.

## Neden Emmet Kullanmal1y1z?

- **H1z**: Kod yazma sürenizi önemli ölçüde azalt1r
- **Verimlilik**: Tekrarlayan HTML yap1lar1n1 saniyeler içinde olu_turur
- **Daha Az Hata**: Otomatik kapanan etiketler sayesinde hata riski azal1r
- **Daha Az Yaz1**: Uzun kodlar1 k1sa k1sayollarla yazars1n1z

## Temel Emmet Söz Dizimi

### 1. Basit Etiketler

```
div ’ <div></div>
p ’ <p></p>
h1 ’ <h1></h1>
```

### 2. Alt Eleman (Child) - `>`

```
div>p ’
<div>
    <p></p>
</div>

ul>li ’
<ul>
    <li></li>
</ul>
```

### 3. Karde_ Eleman (Sibling) - `+`

```
div+p+span ’
<div></div>
<p></p>
<span></span>
```

### 4. Çarpma (Multiplication) - `*`

```
ul>li*5 ’
<ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>
```

### 5. Yukar1 Ç1kma (Climb-up) - `^`

```
div>ul>li^div ’
<div>
    <ul>
        <li></li>
    </ul>
    <div></div>
</div>
```

### 6. Gruplama - `()`

```
div>(header>ul>li*2>a)+footer>p ’
<div>
    <header>
        <ul>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
        </ul>
    </header>
    <footer>
        <p></p>
    </footer>
</div>
```

### 7. ID ve Class

```
div#header ’ <div id="header"></div>
div.container ’ <div class="container"></div>
div#main.container.wrapper ’ <div id="main" class="container wrapper"></div>
```

### 8. Özel Özellikler (Attributes)

```
a[href="https://example.com"] ’ <a href="https://example.com"></a>
input[type="text" placeholder="Enter name"] ’ <input type="text" placeholder="Enter name">
```

### 9. Metin 0çerii - `{}`

```
p{Merhaba Dünya} ’ <p>Merhaba Dünya</p>
a{T1kla} ’ <a href="">T1kla</a>
```

### 10. Numaraland1rma - `$`

```
ul>li.item$*3 ’
<ul>
    <li class="item1"></li>
    <li class="item2"></li>
    <li class="item3"></li>
</ul>

ul>li.item$$$*3 ’
<ul>
    <li class="item001"></li>
    <li class="item002"></li>
    <li class="item003"></li>
</ul>
```

## Pratik Örnekler

### Örnek 1: Navbar Yap1s1

```
nav#main-nav.navbar>ul.nav-list>li.nav-item*4>a.nav-link{Menu Item $}
```

Sonuç:
```html
<nav id="main-nav" class="navbar">
    <ul class="nav-list">
        <li class="nav-item"><a href="" class="nav-link">Menu Item 1</a></li>
        <li class="nav-item"><a href="" class="nav-link">Menu Item 2</a></li>
        <li class="nav-item"><a href="" class="nav-link">Menu Item 3</a></li>
        <li class="nav-item"><a href="" class="nav-link">Menu Item 4</a></li>
    </ul>
</nav>
```

### Örnek 2: Form Yap1s1

```
form>div.form-group*3>(label{Field $}+input[type=text name=field$ placeholder="Enter field $"])
```

### Örnek 3: Tablo Yap1s1

```
table>thead>tr>th*4{Ba_l1k $}^^tbody>tr*3>td*4{Veri $}
```

### Örnek 4: Card Yap1s1

```
div.card>(div.card-header>h2{Card Title})+(div.card-body>p{Card content here})+(div.card-footer>button{Learn More})
```

## CSS için Emmet

Emmet sadece HTML için deil, CSS için de kullan1labilir:

```
m10 ’ margin: 10px;
p20 ’ padding: 20px;
w100p ’ width: 100%;
df ’ display: flex;
fz16 ’ font-size: 16px;
```

## Emmet Kullan1m 0puçlar1

1. **Tab tu_u**: Emmet k1sayollar1n1 geni_letmek için Tab tu_una bas1n
2. **Pratik yap1n**: S1k kulland11n1z yap1lar1 Emmet ile yazmaya al1_1n
3. **Karma_1ktan kaç1n1n**: Çok karma_1k yap1lar yerine parça parça yaz1n
4. **Snippet'ler**: VS Code gibi editörlerde kendi Emmet snippet'lerinizi olu_turabilirsiniz

## Kaynaklar

- [Emmet Resmi Dokümantasyon](https://docs.emmet.io/)
- [Emmet Cheat Sheet](https://docs.emmet.io/cheat-sheet/)
- [VS Code'da Emmet Kullan1m1](https://code.visualstudio.com/docs/editor/emmet)

## Al1_t1rmalar

1. Bir navigation bar'1 Emmet ile olu_turun
2. 5 sat1rl1 bir tablo yap1s1 olu_turun
3. Form elemanlar1 içeren bir contact form tasarlay1n
4. Blog post card'lar1 için tekrar eden yap1 olu_turun

---

**Not**: Emmet kullan1m1nda ustala_mak zaman al1r. Küçük ba_lay1n ve yava_ yava_ daha karma_1k yap1lara geçin.
