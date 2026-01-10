install:
	pip install ${PWD}/
	

dev-backend:
	source venv/bin/activate && adk api_server --allow_origins="*"

