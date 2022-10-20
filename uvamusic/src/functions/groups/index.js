import db from '../../db/index.js'

export const getMusics = (req, res, next) => {
  try {
    const { userId } = req.params;

    db.query("SELECT * FROM musics", (err, result) => {
      if(err) return res.send(err);
      return res.send(result);
    });
  } catch (error) {
    next(error);
  }
};

export const createMusic = (req, res, next) => {
  try{
    const { name, author, postingDate } = req.body;

    db.query("INSERT INTO musics (name, author, postingDate) VALUES (?, ?, ?)", [name, author, postingDate], (err, result) => {
      if(err){
        return res.send(err);  
      }
      return res.send(result);
    });
  } catch (error) {
    next(error);
  }
};

export const searchMusic = (req, res, next) => {
  try {
    const { musicName } = req.body;
    db.query("select * from MOCKDATA", [musicName], (err, result) => {
    // db.query("SELECT * FROM musics WHERE name = ?", [musicName], (err, result) => {
      if(err){
        return res.send(err);  
      }
      return res.send(result);
    })

  } catch (error) {
    next(error);
  }
};

export const deleteMusic = (req, res, next) => {
  try {
    const { id } = req.params;

    db.query(`DELETE FROM musics WHERE id = ?`, [id], (err, result) => {
      if(err){
        return res.send({err});  
      }
      return res.send({result});
    });
  } catch (error) {
    next(error);
  }
};