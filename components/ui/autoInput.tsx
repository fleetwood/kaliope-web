import React, { InputHTMLAttributes, useEffect, useState } from "react";
import { KeyVal } from "../../types/props";
import { dedupe } from "../../utils/helpers";

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
    setCurrentOptions(dedupe(
      options
        .filter(({key}) => key.toLowerCase().indexOf(term.toLowerCase())>-1)
      ,'key')
      .splice(0,5)
    )
    setSearch(term)
  }

  const optionClick = (option:KeyVal) => {
    const val = option.value?.toString()||option.key;
    setShowList(false)
    setSearch(val)
    onUpdate(val)
  }

  useEffect(() => {
    setCurrentOptions(dedupe(options,'key').splice(0,5))
  },[options])

  return (
    <>
      <input
        className={`input input-bordered w-full mb-2 ${props.className}`}
        onChange={(e) => updateSearch(e.currentTarget.value)}
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
    </>
)};

export default AutoInput