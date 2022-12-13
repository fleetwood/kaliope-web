import { InputHTMLAttributes, KeyboardEvent, MutableRefObject, useEffect, useRef, useState } from "react";
import { KeyVal } from "../../types/props";
import { dedupe, log } from "../../utils/helpers";

type AutoOptionProps =  InputHTMLAttributes<HTMLInputElement> & {
  options: KeyVal[]
  onUpdate: Function 
  itemClassName?: string
}

const AutoInput = (props:AutoOptionProps) => {
  const { options, placeholder, onUpdate, itemClassName } = props;
  const [currentOptions, setCurrentOptions] = useState<KeyVal[]>([])
  const [showList, setShowList] = useState(false)
  const [search, setSearch] = useState('')
  const ref:MutableRefObject<HTMLDivElement|null> = useRef(null)

  const getBorder = (index:number, length:number) => {
    const base = 'px-8 py-2 border-info ',
    middleItem = base+ 'border-l border-r ',
    topItem = middleItem +'border-t rounded-t-full ',
    bottomItem = middleItem +'border-b rounded-b-full ',
    onlyItem = base+'border rounded-full ';
    return length===1 ?
        onlyItem :
      index===0 ?
        topItem : 
      index===length-1 ? 
        bottomItem : 
      middleItem
  }

  const updateSearch = (term:string) => {
    setCurrentOptions(
      dedupe(
        options.filter(({key}) => key.toLowerCase().indexOf(term.toLowerCase())>-1)
      ,'key')
      .splice(0,5)
    )
    setSearch(term)
  }

  const optionClick = (option:KeyVal) => {
    log('optionClick',option)
    setShowList(false)
    setSearch(option.key)
    onUpdate(option)
  }

  const keyCap = (e:KeyboardEvent) => {
    if(e.key==='Enter') {
      e.preventDefault()
      setShowList(false)
    }
    if(e.key==='Tab') {
      setShowList(false)
    }
  }

  useEffect(() => {
    setCurrentOptions(dedupe(options,'key').splice(0,5))
  },[options])

  useEffect(() => {
    const autoInputListener = (e:any) => {
      const target = e.target
      if (target && !ref.current?.contains(target)) {
        setShowList(false)
      }
    } 
    document.addEventListener("click",autoInputListener)
    document.addEventListener("keyUp",autoInputListener)
    return () => {
      document.removeEventListener("click",autoInputListener)
      document.removeEventListener("keyUp",autoInputListener)
    }
  }, []);

  return (
    <div ref={ref}>
      <input
        className={`input input-bordered w-full mb-2 ${props.className}`}
        onChange={(e) => updateSearch(e.currentTarget.value)}
        onKeyDown={(e) => keyCap(e)}
        placeholder={placeholder}
        onFocus={() => setShowList(true)}
        value={search}
      />
      {showList &&
      <ul className={`absolute min-w-full z-10 `}>
        {currentOptions
          .map((option,index) => 
          <li className={`
              bg-base-200 min-w-full hover:bg-base-100 hover:text-info cursor-pointer 
              ${itemClassName}
              ${getBorder(index, currentOptions.length)}`
            }
            onClick={() => optionClick(option)}
            key={option.value||option.key}>
            {option.key}
          </li>
        )}
      </ul>
      }
    </div>
)};

export default AutoInput