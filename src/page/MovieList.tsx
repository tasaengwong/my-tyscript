import { Apifetch } from "../component/apiFetch";

const Container = () => {
  let movlist = Apifetch();
  console.log(movlist);

  return (
    <div className="content">
      <div className="row">
        {movlist
          ? movlist.map((items) => (
              <div className="colum" key="{items.id}">
                <div className="card">
                  <img src="{items.image}" alt="{items.title}" />
                </div>
              </div>
            ))
          : movlist}
      </div>
    </div>
  );
};

export default Container;
