fetch("http://127.0.0.1:8000/api/v1/books?page=1").then(function(respnse){
    return respnse.json()

 })
.then(function(data){
    console.log(data.data)
    let containerBook=document.getElementById("request-card")
    containerBook.innerHTML=""
    data.data.forEach(Book => {
       containerBook.innerHTML+=`

                    <span class="request-status bg-[#EFF6FF] text-[#617086] text-xs rounded px-2 py-1 w-fit">
                        Définitif
                    </span>

                    <div class="request-book flex gap-4 items-center">

                        <div class="book book-small book-algorithmique bg-[#254B61] w-16 h-24 rounded-sm p-2 flex flex-col justify-between">
                            <div>
                                <img src="http://127.0.0.1:8000${Book.image_url}"
                                >
                             
                            </div>
                            <div class="book-line border-b border-white"></div>
                        </div>

                        <div class="request-info">
                            <p class="request-label text-[10px] text-[#617086]">
                                ${Book.title}
                            </p>

                            <h3 class="request-title text-sm font-bold text-[#1E3A5F]">
                                ${Book.description}
                            </h3>

                         
                        </div>

                    </div>

                  

                    <div class="request-footer flex justify-between items-center mt-auto">
                        <p class="request-owner text-xs text-[#617086]">
                           ${Book.author}
                        </p>

                        <a href="details.html" class="details-link text-xs font-semibold text-[#245AA7]">
                            Voir les détails →
                        </a>
                    </div>

            `
        
    });
   
})
.catch(function(error){
    console.log("error"+error)
}
)
