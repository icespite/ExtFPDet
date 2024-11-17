(function(ProboJs) {ProboJs.input.refine = {
    '1':{
        caption:'カテゴリによる絞り込み'
        ,refines:[
            {name: 'products', label: '製品',     value:'_TEXT/EQ/1/products'}
           ,{name: 'casestudy',label: '導入事例', value:'_TEXT/EQ/1/casestudy'}
           ,{name: 'news',     label: 'ニュース', value:'_TEXT/EQ/1/news'}
           ,{name: 'company',  label: '企業情報', value:'_TEXT/EQ/1/company'}
        ]
    },
    '2':{
        caption:'ファイルタイプによる絞り込み'
        ,refines:[
            {name: 'html', label: 'HTML',     value:'_TEXT/EQ/3/html'}
           ,{name: 'pdf' , label: 'PDF',      value:'_TEXT/EQ/3/pdf'}
        ]
    }
};})(ProboJs);