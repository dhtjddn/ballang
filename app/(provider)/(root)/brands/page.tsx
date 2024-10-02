
import axios from 'axios';
import Link from 'next/link';


export default async function BrandPage(props) {
    const res = await axios.get('https://api.ballang.yoojinyoung.com/products')
    const products = await res.data;
    

    const result = await axios.get('https://api.ballang.yoojinyoung.com/brands')
    const brands =  result.data;
    


    
    const result2 = await axios.get(`https://api.ballang.yoojinyoung.com/brands/`)
    const brandData =  result2.data;
    console.log(brandData);

    console.log("asdasd" , props)
    


  return (
    <>
    <main className='px-5 lg:px-8 py-6 lg:py-10 mx-auto max-w-screen-lg flex flex-col grow w-full items-stretch'>
    <h2 className='font-bold text-3xl text-center my-12'>Brands</h2>
    <nav className='mx-auto max-w-screen-lg mb-16'>
    <ul className="gap-x-4 text-sm grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-y-5 justify-items-center">
    <li className='col-span-3 sm:col-span-4 md:col-span-6 mb-4'>
    <Link href={"/brands"} className='class="text-slate-700 hover:text-black transition-all'>All</Link>
    </li>
    {brands.result.map((brand) => (
    <li key={brand.id}>
         <Link href={`/brands?brandId=${brand.id}`}>{brand.nameKr}</Link>
       
    </li>
    ))}

    
    </ul>
    </nav>
    <ul className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-8 gap-y-12'>
    {products.result.map((product) => (
         <li key={product.brandid}>
         <Link className="relative flex flex-col group" href="#">
         <div className="relative mb-4 w-full aspect-square">
           <img src={product.imgSrc} className=" h-full w-full" />
           {/* 노란색 오류는 상관없음 */}
         </div>
         <div className="grid gap-y-2">
         <div className="text-sm font-bold">{product.brand.nameEn}</div>
         <h6 className="text-xl">{product.name}</h6>
         <div className="text-sm flex flex-col sm:flex-row items-baseline gap-1.5">
           <span className="text-red-500 line-through font-semibold">₩{product.originalPrice.toLocaleString()}</span>
           <span className="font-bold">₩{product.price.toLocaleString()}</span>
         </div>
         </div>
           </Link>
       </li>
    ))}



    </ul>
      </main>

      </>
  )
}


