# Factory Functions ve Module Pattern - The Odin Project

Bu bölümde **factory function** ve **module pattern** kullanarak nasıl düzenli, kapsüllenmiş JavaScript modülleri ve nesneleri oluşturacağımı öğrendim.  
Factory function ile `class` kullanmadan obje üretmeyi, parametrelerle esnek yapılar kurmayı öğrendim.  
Closure sayesinde fonksiyon içindeki değişkenleri **özel (private)** tutup, sadece dönen metodlar aracılığıyla erişim sağlamayı kavradım.  
Örnek olarak `const createTodo = (title) => { let done = false; return { title, toggle: () => done = !done, isDone: () => done } }` şeklinde state ve davranışı bir arada tutmayı pratik ettim.  
Module pattern (IIFE veya revealing module) ile global kapsamı kirletmeden tekil modüller oluşturup, **public** ve **private** üyeleri ayırmayı öğrendim.  
Bu yaklaşımların test edilebilirlik, yeniden kullanılabilirlik ve kodun bakımını kolaylaştırma gibi avantajlarını gördüm.  
Artık küçük uygulamaları factory ve module pattern kombinasyonlarıyla daha güvenli ve okunaklı şekilde yapılandırabiliyorum.  