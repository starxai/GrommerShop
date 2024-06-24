function FilteredCards({data}){
    const {salon_languages, salon_name } = data
    return(
        <div>
              <div style={{color:"white"}}>{salon_name}</div>
              <div></div>
        </div>
    )
}

export default FilteredCards