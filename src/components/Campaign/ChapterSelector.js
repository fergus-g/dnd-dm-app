import classes from './ChapterSelector.module.css'

const ChapterSelector = () => {
    return <section className={classes.chapter}>
    <div>
  <label>
  Choose your chapter:
  </label>
  <div className={classes.dropdown}>
    <select className={classes.dropbtn}>
      <option value="cpt-1">Chapter 1</option>
      <option value="cpt-2">Chapter 2</option>
      <option value="cpt-3">Chapter 3</option>
      <option value="cpt-4">Chapter 4</option>
      <option value="cpt-5">Chapter 5</option>
      <option value="cpt-6">Chapter 6</option>
      <option value="cpt-7">Chapter 7</option>
    </select>  
 </div>    
</div>
</section>
}

export default ChapterSelector;