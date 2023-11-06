import style from '@/app/styles/portfolio/portfolio.module.css'

const Portfolio = () => {

  return (
    <div className="w-full h-full pt-36">
      <div className="flex flex-col max-w-lg">
        <h2 className="text-5xl pb-6 border-b-2 font-bold">Projetos</h2>
        <ul className="list-none text-xl">
          <li className={`pb-6 border-b-2 pt-6 flex items-center relative overflow-hidden ${style.selected_item}`}>
            <div className={`flex items-center ${style.icon_wrapper}`}>
              <i className={`symbol ${style.icon}`}>arrow_right_alt</i>
            </div>
            <div className={`flex w-full`}>
              <h4 className={`font-bold ${style.text}`}>
                Cost Effectiveness Explorer
              </h4>
              <p className='ml-auto'>
                Development
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div>
        Images
      </div>
    </div>
  );
}

export default Portfolio