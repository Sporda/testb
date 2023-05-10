import React from 'react';
import handleSubmit from '../pages/api/handleSubmit';
import styles from '../styles/Home.module.css'

export default function SearchForm(props){
  const handleForm = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();
 
    // Get data from the form.
    const data = {
      name: event.target.repName.value,
    };
    console.log('data component:', data);
    
    const testresult = await handleSubmit(data);

    props.onFinish(testresult);
    
  };
        return(
          <div>
            <form onSubmit={handleForm} className={styles.SearchForm}>
                <input type="text" name="repName" required minLength={3} placeholder='Type name of the Repository' />
                <button className={styles.GlowingBtn} type="submit">
                  <span className={styles.GlowingTxt}>S<span className={styles.FaultyLetter}>E</span>AR<span className={styles.FaultyLetter}>C</span>H</span>
                </button>
            </form>
          </div>
            
        )
}