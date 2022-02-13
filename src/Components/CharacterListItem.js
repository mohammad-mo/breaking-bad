const CharacterListItem = ({ item }) => 
{

  const currectBirthday = (item) =>
  {
    switch(item.name) {
      case 'Walter White':
        return item.birthday = '03-07-1956'
      case 'Jesse Pinkman':
        return item.birthday = '08-27-1979'
      case 'Skyler White':
        return item.birthday = '08-11-1968'
      case 'Walter White Jr.':
        return item.birthday = '08-21-1992'
      case 'Henry Schrader':
        return item.birthday = '08-04-1963'
      case 'Marie Schrader':
        return item.birthday = '03-03-1973'
      case 'Mike Ehrmantraut':
        return item.birthday = '01-31-1947'
      case 'Saul Goodman':
        return item.birthday = '10-22-1962'
      case 'Gustavo Fring':
        return item.birthday = '04-26-1958'
      case 'Hector Salamanca':
        return item.birthday = '11-26-1939'
      case 'Domingo Molina':
        return item.birthday = '07-15-1989'
      case 'Tuco Salamanca':
        return item.birthday = '07-09-1961'
      case 'Lydia Rodarte-Quayle':
        return item.birthday = '07-24-1975'
      case 'Todd Alquist':
        return item.birthday = '04-02-1988'
      case 'Jane Margolis':
        return item.birthday = '12-16-1981'
      case 'Skinny Pete':
        return item.birthday = '02-27-1971'
      case 'Brandon Mayhew':
        return item.birthday = '11-01-1981'
      case 'Huell Babineaux':
        return item.birthday = '11-11-1968'
      case 'Steven Gomez':
        return item.birthday = '02-15-1963'
      case 'Theodore Beneke':
        return item.birthday = '09-27-1960'
      case 'Gale Boetticher':
        return item.birthday = '01-09-1967'
      case 'Andrea Cantillo':
        return item.birthday = '04-27-1989'
      case 'Brock Cantillo':
        return item.birthday = '04-17-2003'
      case 'Carmen Molina':
        return item.birthday = '08-18-1973'
      case 'Gretchen Schwartz':
        return item.birthday = '06-28-1965'
      case 'Elliot Schwartz':
        return item.birthday = '07-22-1964'
      case 'Mrs. Pinkman':
        return item.birthday = '08-15-1950'
      case 'Adam Pinkman':
        return item.birthday = '10-12-1950'
      case 'Jake Pinkman':
        return item.birthday = '08-28-1995'
      case 'Emilio Koyama':
        return item.birthday = '02-03-1973'
      case 'Dr. Delcavoli':
        return item.birthday = '12-27-1958'
      case 'Wendy S.':
        return item.birthday = '12-12-1956'
      case 'Ken':
        return item.birthday = '09-10-1975'
      case 'George Merkert':
        return item.birthday = '10-27-1955'
      case 'Donald Margolis':
        return item.birthday = '03-20-1948'
      case 'Clovis':
        return item.birthday = '10-02-1967'
      case 'SAC Ramey':
        return item.birthday = '11-12-1966'
      case 'Tortuga':
        return item.birthday = '05-16-1944'
      case 'Juan Bolsa':
        return item.birthday = '01-06-1955'
      case 'Group Leader':
        return item.birthday = '10-15-1954'
      case 'Pamela':
        return item.birthday = '05-24-1968'
      case 'Stacey Ehrmantraut':
        return item.birthday = '01-04-1983'
      case 'Officer Saxton':
        return item.birthday = '03-18-1970'
      case 'Jack Welker':
        return item.birthday = '06-21-1953'
      case 'Kimberly Wexler':
        return item.birthday = '05-12-1972'
      case 'Howard Hamlin':
        return item.birthday = '12-07-1964'
      case 'Charles McGill':
        return item.birthday = '10-17-1947'
      case 'Ignacio Varga':
        return item.birthday = '12-09-1971'
      case 'Eduardo Salamanca':
        return item.birthday = '02-13-1975'
      case 'Marco & Leonel Salamanca':
      case 'Bogdan Wolynetz':
      case 'Gonzo':
      case 'Christian Ortgea':
      case 'No-Doze':
      case 'Holly White':
      case 'Victor':
      case 'Francesca Liddy':
      case 'Cynthia':
      case 'Tim Roberts':
      case 'Kaylee Ehrmantraut':
      case 'Duane Chow':
        return item.birthday = 'Unknown'
      default:
        return item.birthday
    }
  }


  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={item.img} alt="character" />
        </div>
        <div className="card-back">
          <h2>{item.name}</h2>
          <ul>
            <li>
              <strong>Actor Name: </strong>
              {item.portrayed === 'Michael Mano' ? 'Michael Mando' : item.portrayed}
            </li>

            <li>
              <strong>Nick Name: </strong>
              {item.nickname}
            </li>

            <li>
              <strong>Birthday: </strong>
              {currectBirthday(item)}
            </li>

            <li>
              <strong>Status: </strong>
                {item.status}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CharacterListItem
