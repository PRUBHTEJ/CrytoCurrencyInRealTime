const Header = () => {
    return (
        <header>
		<nav>
			<div className="logo-container">
				<span className="logo"></span>ggy
			</div>
			<div className="links-container">
				<button>Home</button>
				<button>ContactUs</button>
				<button>Blog</button>
				<button>Activity</button>
				<button>Page</button>


				<div className="search-container">
				<input />	<button>Search</button>
				</div>

			</div>
		</nav>
	</header>
    );
}

export default Header;